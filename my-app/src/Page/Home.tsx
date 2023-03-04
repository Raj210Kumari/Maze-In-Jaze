import React from "react";
import style from "./Home.module.css";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface User {
  name: String,
  email: String,
  password: String,
  numberOfWins:String
}

const Home = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setdata] = React.useState<User[]>([])
  
  const showLeaderboard =()=>{
    fetch(`http://localhost:8080/user/leader`,).then(res=>res.json())
    .then((res:User[])=>{
      // console.log(res);
      // const ans = res.map((user:any)=>console.log(user.name))
      setdata(res)
    })
    .catch(err=>console.log(err))
  }

  React.useEffect(()=>{
    showLeaderboard()
  },[])
  console.log('data:', data)


  return (
    <div className={style.mainContainerDiv}>
      <div className={style.userDetailDiv}>
        {/* <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Room ID" /> */}
        <button className={style.playButton}>Play</button>
        <button onClick={onOpen} className={style.leaderboardButton}>
          Show Leaderboard
        </button>
        {/* onclicking the button a popup will be shown to the user shoing 10 top user */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Players Leaderboard</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Players</Th>
                      <Th>Score</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                  {data.map(item => (
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.numberOfWins}</Td>
                    </Tr>
                  ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
