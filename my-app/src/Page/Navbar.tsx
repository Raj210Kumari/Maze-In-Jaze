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
  Input,
} from "@chakra-ui/react";
import nevbg from "../Assets/nev-removebg-preview.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
    };
    localStorage.setItem("email",email)
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
          <Heading ml="20px" fontSize="28px" color="black" fontWeight={900}>
            Maze-In-Jaze
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" mr="20">
          <Button
            onClick={onOpen}
            bgImg={nevbg}
            variant="unstyled"
            w="120px"
            fontWeight="900"
            backgroundSize="cover"
            p="2px"
            fontSize="26px"
            color="#000"
          >
            Login
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgImage="url('https://i.gifer.com/5J46.gif')"
              bgSize="cover"
              color="#000"
              p="60px 30px"
              m="6% 0 0 0"
            >
              <ModalHeader
                fontSize="4xl"
                fontWeight="900"
                width="100%"
                paddingTop="0px"
                bg="#ffffff67"
                textAlign="center"
              >
                Login
              </ModalHeader>
              <ModalCloseButton bg="#ffffff67" />
              <ModalBody gap="2" bg="#ffffff67" pb="30px" width="100%" fontSize="xl">
                <Text m="2" fontWeight="900">
                  Name
                </Text>
                <Input 
                borderColor="#000" 
                borderRadius="4px" 
                color="#000" fontSize="16px" fontWeight="700" _placeholder={{ color: 'inherit' }} focusBorderColor="#000" placeholder="Enter name here" value={name} onChange={(e) => setName(e.target.value)}/>
                <Text m="2" fontWeight="900">
                  Email
                </Text>
                <Input 
                borderColor="#000" 
                borderRadius="4px" 
                color="#000" fontSize="16px" fontWeight="700" _placeholder={{ color: 'inherit' }} focusBorderColor="#000" placeholder="Enter Email here" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Text m="2" fontWeight="900">
                  Password
                </Text>
                <Input 
                borderColor="#000" 
                borderRadius="4px" 
                color="#000" fontSize="16px" fontWeight="700" _placeholder={{ color: 'inherit' }} focusBorderColor="#000" 
                placeholder="Enter Password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </ModalBody>

              <ModalFooter paddingBottom="0px">
                <Link to="/game" onClick={handleSubmit} >
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Submit
                  </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
