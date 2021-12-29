import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CustomApolloProvider } from '@app/apollo'
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomApolloProvider>
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer/>
      </ChakraProvider>
    </CustomApolloProvider>
  )
}

export default MyApp
