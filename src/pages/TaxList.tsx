import {
  Heading,
  Button,
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const TaxList = () => {
  const data = [
    { id: 1, tributo: 'Tributo A', numeroDoc: '12345', importadoEm: '2024-10-01', status: 'Pending' },
    { id: 2, tributo: 'Tributo B', numeroDoc: '67890', importadoEm: '2024-10-02', status: 'Completed' },
    { id: 3, tributo: 'Tributo C', numeroDoc: '34567', importadoEm: '2024-10-03', status: 'Pending' },
    { id: 4, tributo: 'Tributo D', numeroDoc: '89123', importadoEm: '2024-10-04', status: 'Completed' },
    { id: 5, tributo: 'Tributo E', numeroDoc: '56789', importadoEm: '2024-10-05', status: 'Pending' },
    { id: 6, tributo: 'Tributo F', numeroDoc: '45678', importadoEm: '2024-10-06', status: 'Completed' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box w="100%" h="100vh" bg="gray.50">
      <Heading as="h1" size="xl" mb={6}>
        Tributos importados e monitorados
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Tributo</Th>
            <Th>Nº Doc.</Th>
            <Th>Importado em</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.tributo}</Td>
              <Td>{item.numeroDoc}</Td>
              <Td>{item.importadoEm}</Td>
              <Td>{item.status}</Td>
              <Td>
                <Button colorScheme="blue" size="sm" mr={2}>
                  Editar
                </Button>
                <Button colorScheme="red" size="sm">
                  Excluir
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <HStack mt={4} justifyContent="space-between">
        <IconButton
          onClick={prevPage}
          icon={<ChevronLeftIcon />}
          isDisabled={currentPage === 1}
          aria-label="Página anterior"
        />
        <Text>
          Página {currentPage} de {totalPages}
        </Text>
        <IconButton
          onClick={nextPage}
          icon={<ChevronRightIcon />}
          isDisabled={currentPage === totalPages}
          aria-label="Próxima página"
        />
      </HStack>
    </Box>
  );
};

export default TaxList;
