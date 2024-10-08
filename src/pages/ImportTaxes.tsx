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
  background,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ImportTaxes = () => {
  const data = [
    { id: 1, nomeArquivo: 'Arquivo A', importadoEm: '2024-10-01', status: 'Pending', qtdeTributos: 10, },
    { id: 2, nomeArquivo: 'Arquivo B', importadoEm: '2024-10-02', status: 'Completed', qtdeTributos: 1, },
    { id: 3, nomeArquivo: 'Arquivo C', importadoEm: '2024-10-03', status: 'Pending', qtdeTributos: 2, },
    { id: 4, nomeArquivo: 'Arquivo D', importadoEm: '2024-10-04', status: 'Completed', qtdeTributos: 3, },
    { id: 5, nomeArquivo: 'Arquivo E', importadoEm: '2024-10-05', status: 'Pending', qtdeTributos: 4, },
    { id: 6, nomeArquivo: 'Arquivo F', importadoEm: '2024-10-06', status: 'Completed', qtdeTributos: 5, },
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

  const handleClick = () => {
    console.log('Botão clicado!');
    alert('Botão clicado!');
  }
  const [base64, setBase64] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      // Quando o arquivo for lido, o resultado será convertido para base64
      reader.onload = (e) => {
        const base64String = e.target.result.split(',')[1]; // Remove o prefixo "data:application/vnd..."
        setBase64(base64String);
        console.log('Base64:', base64String);
        alert('Arquivo convertido para Base64 com sucesso!');
      };

      // Ler o arquivo como Data URL (Base64)
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box w="100%" h="100vh" bg="gray.50">
      <Heading as="h1" size="xl" mb={6}>
        Arquivos importados
      </Heading>
      <div>
      <h1>Importar Arquivo Excel</h1>
      <input 
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
      {base64 && (
        <div>
          <h2>Arquivo convertido para Base64:</h2>
          <textarea
            rows="10"
            cols="50"
            value={base64}
            readOnly
          />
        </div>
      )}
    </div>
      <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Importar</button>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Arquivo</Th>
            <Th>Importado em</Th>
            <Th>Status</Th>
            <Th>Qtde. Tributos</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.nomeArquivo}</Td>
              <Td>{item.importadoEm}</Td>
              <Td>{item.status}</Td>
              <Td>{item.qtdeTributos}</Td>
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

export default ImportTaxes;
