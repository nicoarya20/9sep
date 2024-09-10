"use client"
import { ActionIcon, Button, Container, Group, Stack, TextInput, Title, Text } from "@mantine/core"
import Link from "next/link"
import { FaArrowCircleLeft } from "react-icons/fa"
import { useState } from "react"

export default function Page(){
   const [form, setForm] = useState({
      email: "",
      password: ""
    });
  
    async function onLogin() {
      if (form.email && form.password) {
        const res = await fetch("/malik/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });
        const data = await res.text();
        if (!res.ok) return alert(data);
        window.location.href = "/auth/profile";
        return
      }
  
      return alert("Please fill all the fields");
    }
   return <Stack align="center"justify="center" h={"100vh"}>
      <Container>
      <ActionIcon variant="transparent" size={"xs"} component={Link} href={"/"}>
         <FaArrowCircleLeft/>
      </ActionIcon>
      <Stack>
         <Title order={3}>Login</Title>
         <TextInput value={form.email} onChange={e => setForm({...form, email: e.target.value})} label="Email"/>
         <TextInput value={form.password} onChange={e => setForm({...form, password: e.target.value})} label="Password"/>
         <Button onClick={onLogin}>Login</Button>
         <Group>
            <Text>if you dont have an account</Text>
            <Button component={Link} href={"/auth/register"}>Register</Button>
         </Group>
         {JSON.stringify(form)}
      </Stack>
      </Container>
   </Stack>
}