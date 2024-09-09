"use client"
import { Box, Button, Card, Center, Container, Flex, Grid, Group, Image, ListItem, Overlay, SimpleGrid, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { CustomHeader } from "./_ui/CustomHeader";
import { Carousel } from "@mantine/carousel";
import '@mantine/carousel/styles.css';
import { MdNoAdultContent, MdSecurityUpdate } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import Link from "next/link";

const listContent = [
  {
    title: "Smart security",
    content: "Before you even start your PC, Windows 11 is at work. Safeguard your device from phishing, network, and cyber-attacks.",
    icon: MdSecurityUpdate
  },
  {
    title: "Windows 11 works how you work",
    content: "Write with your own voice and adapt your digital experience to your unique audio and visual needs. Windows 11 OS is made for you, and for the things you love.",
    icon: GrWorkshop
  },
  {
    title: "Gaming never looked so good",
    content: "Immerse yourself in a cinematic gaming experience with next-level performance, smoother graphics, and natural lighting. Play next-gen and classic games online with Windows 11..",
    icon: IoGameController
  },
  {
    title: "Creativity meets intelligence", 
    content: "Use AI to focus on the moments that matter most. Edit your photos and videos with Windows 11.",
    icon:  FaImage 
  }
]


function Item() {
  return <SimpleGrid cols={2}>
    {listContent.map((item, index) => <Card bg={"#DFEAFF"} key={index}>
      <Flex>
        <Stack align="center" justify="center">
          <item.icon size={64} />
        </Stack>
        <Stack p={"md"} align="start">
          <Title order={3}>{item.title}</Title>
          <Text>{item.content}</Text>
          <UnstyledButton component={Link} href={"/"} variant="transparent" size="sm" >Learn More</UnstyledButton>
        </Stack>
      </Flex>
    </Card>)}
  </SimpleGrid>
}

export default function Home() {
  const fontSize = "5.5rem"
  const fontSize2 = "3.5rem"
  return (
    <Stack>
      <CustomHeader />
      <Container>
        <Stack align="center" justify="center">
          <Title size={fontSize}>Welcome to Windows</Title>
          <Text size="md" ta={"center"}>
            We know your have got a lot to do. Every day delivers a new challenge. Well, those challenges are about to get easier with Windows 11.
          </Text>
          <Carousel withIndicators loop>
            <Carousel.Slide>
              <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-Search-bar?scl=1" alt="" />
              
              <Title  c="white" w={700} style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px'}}>Explore Windows 11 new features</Title>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-PC-open-with-Start-menu-on-the-screen?scl=1" alt="" />
              <Title style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px'
              }} c={"white"}>Get the best Windows yet</Title>
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-A-person-setting-a-PC-on-a-table?scl=1" alt="" />
              <Title style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px'
              }} c={"white"}>Find the right PC for you</Title>
            </Carousel.Slide>
          </Carousel>
        </Stack>
      </Container>

      <Space h={90} />
      <Box bg={"#ffe8cc"}>
        <Stack align="center" justify="center">
          <Group bg={"#ffe8cc"}>
            <Box>
              <Title size={fontSize}>Whats new in Windows 11</Title>
              <Text ta={"center"}>
                Windows 11 is more powerful than ever. Discover the latest features to help you be productive, creative, and more.
              </Text>
            </Box>
          </Group>
        </Stack>
        <Group >
          <Space h={20} />
          <Grid>
            <Grid.Col span={5} offset={1}>
              <Image radius={10} src={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-PC-with-colorful-bloom-Copilot-icon-on-screen-4000x4000?scl=1"} alt="" />
              <Title ta={"center"}>A new AI era Begins</Title>
              <Text>Step into a new era of AI-powered Windows computers with your very own Copilot+ PC. The fastest, most intelligent Windows PCs ever.</Text>
            </Grid.Col>
            <Grid.Col span={5} >
              <Image radius={10} src={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT_PhoneLink-4000x3000?scl=1"} alt="" />
              <Title ta={"center"}>Sync your phone and PC</Title>
              <Text >Step into a new era of AI-powered Windows computers with your very own Copilot+ PC. The fastest, most intelligent Windows PCs ever.</Text>
            </Grid.Col>
          </Grid>
        </Group>
      </Box>
      <Space h={100} />
      <Container>
        <Stack align="center">
          <Title ta={"center"} size={fontSize2}>
            Explore Windows 11 Features
          </Title>
          <Text ta={"center"}>Access AI from your fingertips with optimal performance at the ready. Embrace Windows 11 features to secure and refine your digital life.</Text>
          <Button bg={"#1864ab"}>Meet Windows 11</Button>
          <Space h={20} />

          <Item />





          {//yang dibawah ribet
          /* <Grid justify="space-around" align="stretch" grow gutter={"lg"}>
            <Grid.Col offset={1} span={{ base: 12, xs: 4 }} bg={"blue"} style={{
              borderRadius: "10px",
            }}>
              <Card withBorder radius="md" bg={"#bac8ff"} flex={1}>
                <Title c={"#364fc7"}>
                  Smart security
                </Title>
                <Text c={"#364fc7"}>
                  Before you even start your PC, Windows 11 is at work. Safeguard your device from phishing, network, and cyber-attacks.
                </Text>
                <Button variant="transparent" c={"#364fc7"} >Learn More</Button>
              </Card>
            </Grid.Col>
            <Grid.Col offset={1} span={{ base: 12, xs: 4 }} >
              <Card withBorder radius="md" bg={"#bac8ff"}>
                <Title c={"#364fc7"}>
                  Windows 11 works how you work
                </Title>
                <Text c={"#364fc7"}>
                  Write with your own voice and adapt your digital experience to your unique audio and visual needs. Windows 11 OS is made for you, and for the things you love.
                </Text>
                <Button variant="transparent" c={"#364fc7"} >Learn More</Button>
              </Card>
            </Grid.Col>
            <Grid.Col offset={1} span={{ base: 12, xs: 4 }} >
              <Card withBorder radius="md" bg={"#bac8ff"}>
                <Title c={"#364fc7"}>
                  Gaming never looked so good
                </Title>
                <Text c={"#364fc7"}>
                  Immerse yourself in a cinematic gaming experience with next-level performance, smoother graphics, and natural lighting. Play next-gen and classic games online with Windows 11.
                </Text>
                <Button variant="transparent" c={"#364fc7"} >Learn More</Button>
              </Card>
            </Grid.Col>
            <Grid.Col offset={1} span={{ base: 12, xs: 4 }} >
              <Card withBorder radius="md" bg={"#bac8ff"}>
                <Title c={"#364fc7"}>
                  Creativity meets intelligence
                </Title>
                <Text c={"#364fc7"}>
                  Use AI to focus on the moments that matter most. Edit your photos and videos with Windows 11.
                </Text>
                <Button variant="transparent" c={"#364fc7"} >Learn More</Button>
              </Card>
            </Grid.Col>
          </Grid> */}
        </Stack>
      </Container>
      <Space h={100} />
      <Box bg={"#ffe8cc"}>
      <Center>
        <Title size={fontSize2}>Start With Your Windows 11 Journey</Title>
        <Text>Get the help you need to make your switch to Windows 11 simple and start enjoying all that Windows has to offer.</Text>
        </Center>
        <Group>
        <Carousel slideSize="30%" height={500} slideGap="md" loop withIndicators>
        <Carousel.Slide >
        <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-Search-bar-3000x4000?scl=1" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-Search-bar-3000x4000?scl=1" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-Search-bar-3000x4000?scl=1" alt="" />
        </Carousel.Slide>
        </Carousel>
        </Group>
      </Box>
    </Stack>

  )
}
