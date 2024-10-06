import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/theme-privider.ts';
import { StrictMode } from 'react';
import { router } from './routes/index.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
)
