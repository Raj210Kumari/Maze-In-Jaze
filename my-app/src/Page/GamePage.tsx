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
import { useNavigate } from "react-router";

export const GamePage = () => {
  const [user1, setUser1] = React.useState<number>(12);
  const [user2, setUser2] = React.useState<number>(12);
  const [diceValue, setDiceValue] = React.useState<number>(0);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [changeUser, setChangeUser] = React.useState<boolean>(false);
  const toast = useToast()
  const nevigate = useNavigate()

  const [userID, setUserID] = React.useState<number>(0)
  const [userName, setUserName] = React.useState<string>("user")
  let email = localStorage.getItem("email")
  const getuserData =()=>{
    fetch(`https://shy-pear-caterpillar-tie.cyclic.app/user/single/${email}`,).then(res=>res.json())
    .then(res=>{
      // console.log(res);
      setUserID(res._id)
      setUserName(res.name)
    })
    .catch(err=>console.log(err))
  }
  getuserData()


  const userScore=(val:number)=>{
    if(changeUser){
      // console.log("user1", user1)
      if(user1<diceValue){
        console.log(`Value is less in ${userName}`)
      }else{
        setUser1((prev:number)=> prev-val)
      }
      console.log(`after change ${userName}`, userName)
    }else{
      console.log("user2", user2)
      if(user2<diceValue){
        console.log("Value is less in user2")
      }else{
        setUser2((prev:number)=> prev-val)
      }
      console.log("after change user2", user2)
    }
  }
  if(user1==0){
    // console.log("winner user1", "user1", user1)
    toast({
      title: `${userName} has won`,
      position: 'top',
      isClosable: true,
    })
    let payload ={
      id:userID
    }
    fetch("https://shy-pear-caterpillar-tie.cyclic.app/user/wins",{
        method:"PATCH",
        body:JSON.stringify(payload),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json())
    .then(res=>{
      console.log(res);
      localStorage.setItem("token",res.token)
    })
    .catch(err=>console.log(err))

    nevigate("/")
    
  }else if(user2==0){
    // console.log("winner user2", "user2", user2)
    toast({
      title: `You Loose the Game`,
      position: 'top',
      isClosable: true,
    })

    nevigate("/")
  }

  // const handleClick = ():void => {
  //   console.log('handleClick:', handleClick)
  //   let btn2: HTMLElement = document.getElementById("button2")!;
  //   btn2.click();
  //   // const id = window.setInterval(() => {
  //   //   if(btn2){
  //   //   }
  //   // }, 1000); 
  //   // setIntervalId(id);
  // };
  



  const diceValueGenerator=()=>{
    setDiceValue(Math.ceil(Math.random() * 6));
    setRotate(!rotate);
    setChangeUser(!changeUser)
    // handleClick()
  }
  React.useEffect(()=>{
    userScore(diceValue)
  },[changeUser])

  return (
    <Box p="0px 20px" className="container">
      {/* <Flex w="85%" m="auto" justifyContent="space-between">
        <Text>Players</Text>
        <Text>Game Page</Text>
        <Text>Scores</Text>
      </Flex> */}

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
                  <Td color="black" textAlign="center">{userName}</Td>
                </Tr>
                <Tr backgroundSize="cover" bgImg={board1}>
                  <Td textAlign="center">Bot</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          
        </Box>
{/* ---------------------Playing Area ----------------------------------------- */}
        <Box 
        width="60%">
          <Flex justifyContent={"space-around"}>
            <Text>{userName}</Text>
            <Text>v/s</Text>
            <Text>Bot</Text>
          </Flex>
          <Flex
            justifyContent={"space-around"}
            h="78vh"
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
            <Button backgroundSize="cover" bgImg={btn1} border="none" color="white" fontWeight="700" fontSize="20px" w="20%" h="60px" isDisabled={changeUser || user1==0 || user2==0} onClick={diceValueGenerator} variant='link'>{userName}</Button>
            <Text></Text>
            <Button id="button2" backgroundSize="cover" bgImg={btn1} border="none" color="white" fontWeight="700" fontSize="20px" w="20%" h="60px" isDisabled={!changeUser || user1==0 || user2==0} onClick={diceValueGenerator} variant='link'>Bot</Button>
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
                    <Td color="black" textAlign="center">{userName}</Td>
                    <Td color="black" textAlign="center">{12 - user1}</Td>
                  </Tr>
                  <Tr backgroundSize="cover" bgImg={board1}>
                    <Td textAlign="center">Bot</Td>
                    <Td textAlign="center">{12 - user2}</Td>
                  </Tr>
                </Tbody>
              ) : (
                <Tbody>
                  <Tr backgroundSize="cover" bgImg={board2}>
                    <Td color="black" textAlign="center">Bot</Td>
                    <Td color="black" textAlign="center">{12 - user2}</Td>
                  </Tr>
                  <Tr backgroundSize="cover" bgImg={board1}>
                    <Td textAlign="center">{userName}</Td>
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
