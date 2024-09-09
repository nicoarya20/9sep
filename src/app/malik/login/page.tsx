'use client'
import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  TextInput,
  Title
} from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  async function onLoagin() {
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
      window.location.href = "/malik/profile";
      return
    }

    return alert("Please fill all the fields");
  }
  return (
    <Container>
      <Center>
        <Stack>
          <Title>Login</Title>
          <TextInput
            value={form.email}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            label="Email"
          />
          <TextInput
            value={form.password}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            label="Password"
          />
          <Group justify="end">
            <Button onClick={onLoagin}>Login</Button>
          </Group>
        </Stack>
      </Center>
    </Container>
  );
}
