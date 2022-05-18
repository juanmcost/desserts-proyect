import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box height={50} mt={4}>
      <Flex justify="center" align="center">
        <Spacer />{/* 
        <Button mx={4} bg={'background'}>
          postres
        </Button> */}
        <Center mx={4}>
          <Image 
            height={20}
            src={"https://i.imgur.com/RWnRw3o.png"}
          />
        </Center>{/* 
        <Button mx={4} bg={'background'}>
          postres
        </Button> */}
        <Spacer />
      </Flex>
    </Box>
  )
}