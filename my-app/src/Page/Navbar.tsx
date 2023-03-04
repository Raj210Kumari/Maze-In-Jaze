import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import style from "./Navbar.module.css";
import nevbg from "../Assets/nev-removebg-preview.png";


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit=()=>{
    const payload={
        name,
        email,
        password
    }
    // console.log(payload)
    fetch("http://localhost:8080/user/",{
        method:"POST",
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
}

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" bg="#ffffffb2">
        <Box p="2">
          <Heading size="20px" color="black" fontWeight={900}>
            Maze-In-Jaze
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" mr="20">
          <Button
            className={style.loginButton}
            onClick={onOpen}
            bgImg={nevbg}
            variant="unstyled"
            w="100px"
            fontWeight="900"
            backgroundSize="cover"
          >
            Log in
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className={style.modalBackground}>
              <ModalHeader
                fontSize="4xl"
                fontWeight="900"
                width="100%"
                paddingTop="0px"
                bg="#ffffff67"
                textAlign="center"
              >
                LogIn
              </ModalHeader>
              <ModalCloseButton bg="#ffffff67" />
              <ModalBody
                gap="2"
                bg="#ffffff67"
                width="100%"
                fontSize="xl"
              >
                <Text m="2" fontWeight="900">
                  Name
                </Text>
                <input type="text" placeholder="Enter name here" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Text m="2" fontWeight="900">
                  Email
                </Text>
                <input type="text" placeholder="Enter Email here" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Text m="2" fontWeight="900">
                  Password
                </Text>
                <input type="text" placeholder="Enter Password here" value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:"20px"}}/>
              </ModalBody>

              <ModalFooter paddingBottom="0px">
                <Button colorScheme="blue" mr={3} onClick={handleSubmit} >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
