import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { CustomApolloProvider } from '@app/apollo'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@app/features/auth/context/authContext';
import { ThemeProvider } from '@app/common/theme/themeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomApolloProvider>
      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer/>
        </AuthProvider>
      </ThemeProvider>
    </CustomApolloProvider>
  )
}

export default MyApp
