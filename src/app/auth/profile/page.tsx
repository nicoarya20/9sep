import { Button, Stack, Title } from "@mantine/core";
import Link from "next/link";
export default function Page() {
  return <Stack align="center" justify="center" h={100}>
    <Title>Profile</Title>
    <Stack>
    <Button component={Link} href={"/auth/register"}>Back</Button>
    </Stack>
  </Stack>
  
}
