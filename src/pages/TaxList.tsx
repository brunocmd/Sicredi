import {
  Heading,
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
import { useTaxes } from "../hooks/useTaxes";

const TaxList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, taxes } = useTaxes(currentPage);

  if (loading) {
    return <h1>Loading</h1>
  }

  const itemsPerPage = 10;

  const totalPages = Math.ceil(taxes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = taxes.slice(startIndex, endIndex);

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
          </Tr>
        </Thead>
        <Tbody>
          {currentData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.type}</Td>
              <Td>{item.documentNumber}</Td>
              <Td>{item.createdAt.toISOString()}</Td>
              <Td>Qualquer coisa</Td>
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
