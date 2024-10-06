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
import { APP_NAME, measures } from "../config/constants";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
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
        <Heading color="teal.500">{ APP_NAME }</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack 
              spacing={measures.stackSpacing} 
              p={measures.stackPadding} 
              boxShadow={measures.stackBoxShadow}
              bg="whiteAlpha.900"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaUserAlt  />} />
                  <Input type="email" placeholder="Usuário" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaLock  />} />
                  <Input type="password" placeholder="Senha" />
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
