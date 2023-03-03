import React from "react";
import "./GamePage.css";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import { GiHighGrass } from "react-icons/gi";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";
import butterfly from "../Assets/butterfly.gif";
import bird from "../Assets/bird.gif";

export const GamePage = () => {
  const [user1, setUser1] = React.useState<number>(12);
  const [user2, setUser2] = React.useState<number>(12);
  const [diceValue, setDiceValue] = React.useState<number>(0);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [changeUser, setChangeUser] = React.useState<boolean>(false);
  const userScore=(val:number):void=>{
    console.log('changeUser user2:', changeUser)
    if(!changeUser){
      setUser2((prev:number)=> prev-val)
    }else{
      setUser1((prev:number)=> prev-val)
    }
  }
  const diceValueGenerator=()=>{
    setDiceValue(Math.ceil(Math.random() * 6));
    setRotate(!rotate);
    setChangeUser(!changeUser)
  }
  React.useEffect(()=>{
    userScore(diceValue)
  },[diceValue])
  

  return (
    <>
      <div>GamePage</div>

{/* ---------------------Users Area ----------------------------------------- */}

      <Flex>
        <Box border="1px solid black" h={"90vh"} width="20%">
          <Text>UserName</Text>
          <TableContainer>
            <Table variant="striped" colorScheme="gray">
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
{/* ---------------------Playing Area ----------------------------------------- */}
        <Box  width="60%">
          <Text>Playing Area</Text>
          <Flex justifyContent={"space-around"}>
            <Text>Player 1</Text>
            <Text>v/s</Text>
            <Text>Player 2</Text>
          </Flex>
          <Flex
            justifyContent={"space-around"}
            h="80%"
            border="1px solid black"
          >
            <Box
              h="100%"
              w="30%"
              border="1px solid red"
              // bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}
              backgroundColor="rgba(0, 0, 0, 0.723)"
            >
              {Array(user1)
                .fill(0)
                .map((el) => (
                  <Image w="14%" m="auto" src={butterfly} />
                ))}
              <Image w="60%" m="auto" src={bird} />
            </Box>
            <Box
              className="diceBox"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
              w="30%"
              border="1px solid red"
            >
              {  
                diceValue==1?<Box className={`rotate-${rotate}`} ><BsDice1 color="red" font-size="48px" /></Box>:
                diceValue==2?<Box className={`rotate-${rotate}`} ><BsDice2 color="red" font-size="48px" /></Box>:
                diceValue==3?<Box className={`rotate-${rotate}`} ><BsDice3 color="red" font-size="48px" /></Box>:
                diceValue==4?<Box className={`rotate-${rotate}`} ><BsDice4 color="red" font-size="48px" /></Box>:
                diceValue==5?<Box className={`rotate-${rotate}`} ><BsDice5 color="red" font-size="48px" /></Box>:
                diceValue==6?<Box className={`rotate-${rotate}`} ><BsDice6 color="red" font-size="48px" /></Box>:<Box className={`rotate-${rotate}`} ><BsDice1 color="red" font-size="48px" /></Box>
            }
            </Box>
            <Box
              h="100%"
              w="30%"
              border="1px solid red"
              // bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}
              backgroundColor="rgba(0, 0, 0, 0.723)"
            >
              {Array(user2)
                .fill(0)
                .map((el) => (
                  <Image w="14%" m="auto" src={butterfly} />
                ))}
              <Image w="60%" m="auto" src={bird} />
            </Box>
          </Flex>
          <Flex justifyContent={"space-around"}>
            <Button colorScheme='black' isDisabled={changeUser} onClick={diceValueGenerator} variant='outline'>Player 1</Button>
            <Text></Text>
            <Button colorScheme='black' isDisabled={!changeUser} onClick={diceValueGenerator} variant='outline'>Player 2</Button>
          </Flex>

        </Box>
{/* ---------------------Score Area ----------------------------------------- */}

        <Box border="1px solid green" h={"90vh"} width="20%">
          <Text>Scores</Text>
          <TableContainer>
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th textAlign="center">Player</Th>
                  <Th textAlign="center">Score</Th>
                </Tr>
              </Thead>
              {user2 > user1 ? (
                <Tbody>
                  <Tr>
                    <Td textAlign="center">P1</Td>
                    <Td textAlign="center">{12 - user1}</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">P2</Td>
                    <Td textAlign="center">{12 - user2}</Td>
                  </Tr>
                </Tbody>
              ) : (
                <Tbody>
                  <Tr>
                    <Td textAlign="center">P2</Td>
                    <Td textAlign="center">{12 - user2}</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">P1</Td>
                    <Td textAlign="center">{12 - user1}</Td>
                  </Tr>
                </Tbody>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
};
