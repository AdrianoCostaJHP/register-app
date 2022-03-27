import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CustomApolloProvider } from '@app/apollo'
import { ToastContainer } from 'react-toastify';
import { colors } from '@app/common/theme/colors';

const customTheme = extendTheme({colors})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomApolloProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
        <ToastContainer/>
      </ChakraProvider>
    </CustomApolloProvider>
  )
}

export default MyApp
