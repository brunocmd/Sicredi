import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { APP_NAME } from '../config/constants';

const Home   = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="gray.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" color="teal.500">
          Home {APP_NAME}
        </Heading>
        <Text fontSize="xl" color="gray.700">
          Página inicial da aplicaçao
        </Text>
        <Button colorScheme="teal" size="lg">
          ;)
        </Button>
      </VStack>
    </Box>
  )
};

export default Home;
