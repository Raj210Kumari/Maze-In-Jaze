import React from "react";
import "./GamePage.css";
import { Box, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Button, useToast,} from "@chakra-ui/react";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";
import butterfly from "../Assets/butterfly.gif";
import bird from "../Assets/bird.gif";
import board1 from "../Assets/board1-removebg-preview.png";
import board2 from "../Assets/board2-removebg-preview.png";
import btn1 from "../Assets/btn1-removebg-preview.png";
import btn2 from "../Assets/btn2-removebg-preview.png";
import dicebase from "../Assets/dicebase-removebg-preview.png";

export const GamePage = () => {
  const [user1, setUser1] = React.useState<number>(12);
  const [user2, setUser2] = React.useState<number>(12);
  const [diceValue, setDiceValue] = React.useState<number>(0);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [changeUser, setChangeUser] = React.useState<boolean>(false);

  const toast = useToast()

  const userScore=(val:number)=>{
    if(changeUser){
      console.log("user1", user1)
      if(user1<diceValue){
        console.log("Value is less in user1")
      }else{
        setUser1((prev:number)=> prev-val)
      }
      console.log("after change user1", user1)
    }else{
      console.log("user2", user2)
      if(user2<diceValue){
        console.log("Value is less in user2")
      }else{
        setUser2((prev:number)=> prev-val)
      }
      console.log("after change user2", user2)
    }


    console.log("changeUser observed:",changeUser)
  }
  if(user1==0){
    // console.log("winner user1", "user1", user1)
    toast({
      title: `User 1 has won`,
      position: 'top',
      isClosable: true,
    })
  }
  if(user2==0){
    // console.log("winner user2", "user2", user2)
    toast({
      title: `User 2 has won`,
      position: 'top',
      isClosable: true,
    })
  }
  const diceValueGenerator=()=>{
    setDiceValue(Math.ceil(Math.random() * 6));
    setRotate(!rotate);
    setChangeUser(!changeUser)
  }
  React.useEffect(()=>{
    userScore(diceValue)
  },[changeUser])

  return (
    <Box className="container">
      <Flex w="85%" m="auto" justifyContent="space-between">
        <Text>Players</Text>
        <Text>Game Page</Text>
        <Text>Scores</Text>
      </Flex>

{/* ---------------------Users Area ----------------------------------------- */}

      <Flex>
        <Box h={"90vh"} width="20%">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th color="white" textAlign="center">Username</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr backgroundSize="cover" bgImg={board2}>
                  <Td color="black" textAlign="center">P1</Td>
                </Tr>
                <Tr backgroundSize="cover" bgImg={board1}>
                  <Td textAlign="center">P2</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          
        </Box>
{/* ---------------------Playing Area ----------------------------------------- */}
        <Box  width="60%">
          <Flex justifyContent={"space-around"}>
            <Text>Player 1</Text>
            <Text>v/s</Text>
            <Text>Player 2</Text>
          </Flex>
          <Flex
            justifyContent={"space-around"}
            h="80%"
          >
            <Box
              h="100%"
              w="30%"
              // bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}
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
            >
              {  
                diceValue==1?<Box className={`rotate-${rotate}`} ><BsDice1 color="white" font-size="60px" /></Box>:
                diceValue==2?<Box className={`rotate-${rotate}`} ><BsDice2 color="white" font-size="60px" /></Box>:
                diceValue==3?<Box className={`rotate-${rotate}`} ><BsDice3 color="white" font-size="60px" /></Box>:
                diceValue==4?<Box className={`rotate-${rotate}`} ><BsDice4 color="white" font-size="60px" /></Box>:
                diceValue==5?<Box className={`rotate-${rotate}`} ><BsDice5 color="white" font-size="60px" /></Box>:
                diceValue==6?<Box className={`rotate-${rotate}`} ><BsDice6 color="white" font-size="60px" /></Box>:<Box className={`rotate-${rotate}`} ><BsDice1 color="white" font-size="60px" /></Box>
            }
            </Box>
            <Box
              h="100%"
              w="30%"
              // bgImg={"https://media.tenor.com/GXYzNczoVAMAAAAC/rain-nature.gif"}
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
            <Button backgroundSize="cover" bgImg={btn1} border="none" color="white" fontWeight="700" fontSize="20px" w="20%" h="60px" isDisabled={changeUser || user1==0 || user2==0} onClick={diceValueGenerator} variant='link'>Player 1</Button>
            <Text></Text>
            <Button backgroundSize="cover" bgImg={btn1} border="none" color="white" fontWeight="700" fontSize="20px" w="20%" h="60px" isDisabled={!changeUser || user1==0 || user2==0} onClick={diceValueGenerator} variant='link'>Player 2</Button>
          </Flex>

        </Box>
{/* ---------------------Score Area ----------------------------------------- */}

        <Box h={"90vh"} width="20%">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th color="white" textAlign="center">Player</Th>
                  <Th color="white" textAlign="center">Score</Th>
                </Tr>
              </Thead>
              {user2 > user1 ? (
                <Tbody backgroundSize="cover" bgImg={board2}>
                  <Tr>
                    <Td color="black" textAlign="center">{12 - user1}</Td>
                    <Td color="black" textAlign="center">P1</Td>
                  </Tr>
                  <Tr backgroundSize="cover" bgImg={board1}>
                    <Td textAlign="center">P2</Td>
                    <Td textAlign="center">{12 - user2}</Td>
                  </Tr>
                </Tbody>
              ) : (
                <Tbody>
                  <Tr backgroundSize="cover" bgImg={board2}>
                    <Td color="black" textAlign="center">P2</Td>
                    <Td color="black" textAlign="center">{12 - user2}</Td>
                  </Tr>
                  <Tr backgroundSize="cover" bgImg={board1}>
                    <Td textAlign="center">P1</Td>
                    <Td textAlign="center">{12 - user1}</Td>
                  </Tr>
                </Tbody>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
};
