import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {  measures } from "../config/constants";
import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const { loginUser } = useLogin();
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await loginUser(username, password);
    navigate('/home');
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      bg="gray.50"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Heading color="teal.500">{ import.meta.env.VITE_APP_NAME }</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleLogin}>
            <Stack 
              spacing={measures.stackSpacing} 
              p={measures.stackPadding} 
              boxShadow={measures.stackBoxShadow}
              bg="whiteAlpha.900"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaUserAlt  />} />
                  <Input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaLock  />} />
                  <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Esqueci minha senha</Link>
                </FormHelperText>
              </FormControl>
              <Button colorScheme="teal" size="lg" type="submit">Login</Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
