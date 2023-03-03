import React from 'react'
import { Box, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import {GiHighGrass} from "react-icons/gi"
import butterfly from "../Assets/butterfly.gif"
import bird from "../Assets/bird.gif"

export const GamePage = () => {
    const [user1, setUser1]=React.useState<number>(8)
    const [user2, setUser2]=React.useState<number>(6)
  return (
    <>
    
    <div>GamePage</div>

    {/* // ------Left Side---------- */}

<Flex>
    <Box border="1px solid black" h={"90vh"} width="20%">
    <Text>UserName</Text>
    <TableContainer>
  <Table variant='striped' colorScheme='gray'>
    <Thead>
      {/* <Tr>
        <Th textAlign="center">Username</Th>
      </Tr> */}
    </Thead>
    <Tbody>
      <Tr>
        <Td textAlign="center">P1</Td>
      </Tr>
      <Tr>
        <Td textAlign="center">P2</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>

    <Box border={"1px solid red"} h={"90vh"} width="60%">
        <Text>Playing Area</Text>
        <Flex justifyContent={"space-around"}>
            <Text>Player 1</Text>
            <Text>v/s</Text>
            <Text>Player 2</Text>
        </Flex>
        <Flex justifyContent={"space-around"} h="100%" border="1px solid black" >
            <Box h="70%" w="30%" border="1px solid red" bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}>
                {Array(user1).fill(0).map((el)=>(
                    <Image w="14%" m="auto" src={butterfly} />
                ))}
                    <Image w="60%" m="auto" src={bird} />
            </Box>
            <Box h="70%" w="30%" border="1px solid red"></Box>
            <Box h="70%" w="30%" border="1px solid red" bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}>
                {Array(user2).fill(0).map((el)=>(
                    <Image w="14%" m="auto" src={butterfly} />
                    ))}
                    <Image w="60%" m="auto" src={bird} />

            </Box>
        </Flex>
        
    </Box>

    <Box border="1px solid green" h={"90vh"} width="20%">
        <Text>Scores</Text>

    </Box>
</Flex>

    </>
  )
}