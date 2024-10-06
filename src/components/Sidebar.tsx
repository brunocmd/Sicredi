import { Box, VStack, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      w="250px"
      h="100vh"
      bg="teal.500"
      color="white"
      p={5}
      position="fixed"
      left={0}
      top={0}
    >
      <Heading as="h3" size="md" mb={6}>
        Menu
      </Heading>
      <VStack align="start" spacing={4}>
        <RouterLink to="/home" style={{width: '100%'}}>
          <Box p={2} _hover={{ bg: 'teal.600' }}>
            Home
          </Box>
        </RouterLink>
        <RouterLink to="/list" style={{width: '100%'}}>
          <Box p={2} _hover={{ bg: 'teal.600' }}>
            Listagem de tributos
          </Box>
        </RouterLink>
        <RouterLink to="/import" style={{width: '100%'}}>
          <Box p={2} _hover={{ bg: 'teal.600' }}>
            Listagem de importações
          </Box>
        </RouterLink>
        <RouterLink to="/#" style={{width: '100%'}}>
          <Box p={2} _hover={{ bg: 'teal.600' }}>
            Sair
          </Box>
        </RouterLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
