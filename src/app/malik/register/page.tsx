"use client";
import {
  Button,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";

export default function Page() {
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
  return (
    <Stack>
      <Flex>
        <Stack w={300} p={"md"}>
          <Title>Register</Title>
          <TextInput
            label={"name"}
            placeholder="name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextInput
            label={"email"}
            placeholder="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextInput
            label={"password"}
            placeholder="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Group justify="end">
            <Button loading={loading} onClick={onRegister}>
              Register
            </Button>
          </Group>
        </Stack>
        <Stack flex={1} bg={"gray"} p={"md"}>
          <Title>List User</Title>
          {listUser.map((user, k) => (
            <Flex key={k} gap={"md"}>
              <Text>{k + 1}</Text>
              <Text>{user.name}</Text>
            </Flex>
          ))}
        </Stack>
      </Flex>
    </Stack>
  );
}
