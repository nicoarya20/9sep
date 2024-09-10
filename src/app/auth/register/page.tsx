"use client"
import { ActionIcon, Button, Container, Group, Stack, TextInput, Title, Text, Flex } from "@mantine/core"
import Link from "next/link"
import { FaArrowCircleLeft } from "react-icons/fa"
import { useState } from "react"
import { useShallowEffect } from "@mantine/hooks"


export default function Page(){
   const [form, setForm] = useState({
      name: "",
      email: "",
      password: ""
    });
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [listUser, setListUser] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
  
    function cleanForm() {
      setForm({
        name: "",
        email: "",
        password: ""
      });
    }
  
    async function loadListUser() {
      const res = await fetch("/malik/api/list");
      const data = await res.text();
      if (!res.ok) return console.log(data);
  
      const dataJSon = JSON.parse(data);
      setListUser(dataJSon.data);
    }
  
    useShallowEffect(() => {
      loadListUser();
    }, []);
  
    async function onRegister() {
      console.log(form)
      setLoading(true);
      try {
        if (form.name && form.email && form.password) {
          const res = await fetch("/malik/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          });
          const data = await res.text();
          if (!res.ok) return alert(data);
  
          const dataJSon = JSON.parse(data);
          console.log(dataJSon);
          alert("Registered successfully");
          cleanForm();
          loadListUser();
          return;
        }
  
        return alert("Please fill all the fields");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
return<Stack align="center"justify="center" h={"100vh"}>
   <Container>
      <Stack>
         <ActionIcon variant="transparent" size={"xs"} component={Link} href={"/"}>
            <FaArrowCircleLeft/>
         </ActionIcon>
         <Title order={3}>Register</Title>
         <TextInput value={form.name} onChange={e => setForm({...form, name: e.target.value})} label="Name"/>
         <TextInput value={form.email} onChange={e => setForm({...form, email: e.target.value})} label="Email"/>
         <TextInput value={form.password} onChange={e => setForm({...form, password: e.target.value})} label="Password"/>
         <Button loading={loading} onClick={onRegister}>Register</Button>
         <Group>
            <Text>if you have an account</Text>
            <Button onClick={() => window.location.href = "/auth/login"}>Login</Button>
         </Group>
         {JSON.stringify(form)}
         <Stack flex={1} bg={"gray"} p={"md"}>
          <Title>List User</Title>
          {listUser.map((user, k) => (
            <Flex key={k} gap={"md"}>
              <Text>{k + 1}</Text>
              <Text>{user.name}</Text>
            </Flex>
          ))}
           </Stack>
      </Stack>
   </Container>

</Stack>
}