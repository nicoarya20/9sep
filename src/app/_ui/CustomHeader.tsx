import { ActionIcon, Box, Button, Container, Flex, Stack, Text } from "@mantine/core"
import { useState } from "react"
import { FaSearch, FaWindows } from "react-icons/fa"
import Link from "next/link"
import { FaX } from "react-icons/fa6"
import { useHover, useShallowEffect } from "@mantine/hooks"


const listMenu = [
   {
      label : "Windows",
      link : "/windows"
   },
   {
      label : "About Windows",
      link : "/aboutwindows"
   },
   {
      label : "Get Windows",
      link : "/getwindows"
   },
   {
      label : "Shop PCs",
      link : "/shoppc"
   },
   {
      label : "Get help",
      link : "/gethelp"
   },
   {
      label : "For business",
      link : "/forbusiness"
   }

]
type ListMenu ={
   label : string
   link : string
}
export function CustomHeader() {
   const [hovered, setHovered] = useState<string | null>(null)
   

   function onHover(value: string) {
      setHovered(value)
   }
   return <Flex w="100%">
   <Container bg={"white"}>
      <Flex gap={"lg"} justify={"space-around"} align={"center"} p={"md"}>
         <FaWindows/>
        {listMenu.map((v,k) => <MenuItemV3 key={k} data={v} onHover={onHover}/>) }
        <Button component={Link} href="{/auth/login}" variant="transparent" size="compact-xs">Login</Button>
        <ActionIcon variant="transparent" size={"xs"}>
         <FaSearch/>
        </ActionIcon>
      </Flex>
      {hovered && <MenuItemV2 dataHover={hovered} setHovered={setHovered}/>}
   </Container>
   </Flex>
}
function MenuItemV2({dataHover,setHovered} : {dataHover : string, setHovered?: (value: string | null) => void}){
function onCLose() {
   setHovered?.(null)
}
return <Box bg={"gray"} w={720} h={200} pos={"absolute"}>
   <Stack gap={0}>
      <Flex justify={"end"}>
         <ActionIcon radius={100} onClick={onCLose}>
            <FaX/>
         </ActionIcon>
      </Flex>
      {dataHover}
   </Stack>
</Box>
}

function MenuItemV3 ({data, onHover} : {data : ListMenu, onHover? : (value: string) => void}) {
   const{hovered, ref} = useHover();

   useShallowEffect(() => {
      if(hovered) {
         onHover?.(data.label)
      }
   }, [hovered])
   return<div ref={ref}>
      <Button color="gray" variant="transparent" size="compact-xs">{data.label}</Button>
   </div>
}
