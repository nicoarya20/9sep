"use client"
import { ActionIcon, Button, Container, Group, Stack, TextInput, Title, Text } from "@mantine/core"
import Link from "next/link"
import { FaArrowCircleLeft } from "react-icons/fa"
import { useState } from "react"

export default function Page(){
   const [form, setForm] = useState({
      email:'',
      password:''
   })
   function onClick(){
      alert(JSON.stringify(form))
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
         <Button onClick={onClick}>Login</Button>
         <Group>
            <Text>if you dont have an account</Text>
            <Button component={Link} href={"/auth/register"}>Register</Button>
         </Group>
         {JSON.stringify(form)}
      </Stack>
      </Container>
   </Stack>
}