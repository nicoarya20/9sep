"use client"
import { Box, Container, Grid, Group, Image, Space, Stack, Text, Title } from "@mantine/core";
import { CustomHeader } from "./_ui/CustomHeader";
import { Carousel } from "@mantine/carousel";
import '@mantine/carousel/styles.css';

export default function Home() {
const fontSize = "5.5rem"
   return(
    <Stack>
      <CustomHeader/>
      <Container>
        <Stack align="center" justify="center">
          <Title size={fontSize}>Welcome to Windows</Title>
          <Text size="md" ta={"center"}>
          We know your have got a lot to do. Every day delivers a new challenge. Well, those challenges are about to get easier with Windows 11.
          </Text>
          <Carousel withIndicators>
            <Carousel.Slide>
            <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-Search-bar?scl=1" alt=""/>
            </Carousel.Slide>
            <Carousel.Slide>
            <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-PC-open-with-Start-menu-on-the-screen?scl=1" alt=""/>
            </Carousel.Slide>
            <Carousel.Slide>
            <Image src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-A-person-setting-a-PC-on-a-table?scl=1" alt=""/>
            </Carousel.Slide>
          </Carousel>
        </Stack>
      </Container>

      <Space h={90}/>
        <Stack align="center" justify="center" bg={"#ffe8cc"}>
          <Group bg={"#ffe8cc"}>
          <Box>
            <Title size={fontSize}>Whats new in Windows 11</Title>
            <Text ta={"center"}>
              Windows 11 is more powerful than ever. Discover the latest features to help you be productive, creative, and more.
            </Text>
            </Box>
            </Group>
            </Stack>
            <Group bg={"#ffe8cc"}>
        <Space h={20}/>
            <Grid>
              <Grid.Col span={5} offset={1}>
                <Image radius={10} src={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-PC-with-colorful-bloom-Copilot-icon-on-screen-4000x4000?scl=1"} alt=""/>
                <Text>Step into a new era of AI-powered Windows computers with your very own Copilot+ PC. The fastest, most intelligent Windows PCs ever.</Text>
              </Grid.Col>
              <Grid.Col span={5} >
                <Image radius={10} src={"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT_PhoneLink-4000x3000?scl=1"} alt=""/>
                <Text >Step into a new era of AI-powered Windows computers with your very own Copilot+ PC. The fastest, most intelligent Windows PCs ever.</Text>
              </Grid.Col>
            </Grid>
            </Group>
         
    </Stack>
   )
}

//What’s new in Windows 11
//Windows 11 is more powerful than ever. Discover the latest features to help you be productive, creative, and more.