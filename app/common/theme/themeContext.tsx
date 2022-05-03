import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeProps = {
  theme?: "dark" | "light";
  alterTheme:() => void
};

export const lightTheme = {
  primary: '#219653',
  lightGreen:'#6FCF97',
  secondary: '#303030',
  white:'#FFFFFF',
  grey: {
    50: '#F2F2F2',
    75: '#BDBDBD',
    100: '#A5A5A5',
    150: '#888888',
    200: '#7d7d7d',
    400: '#363636',
    600: '#1a202c',
  },
  text:{
    primary: '#219653',
    black: '#000000',
    white:'#FFFFFF',
    grey:{
      50: '#A5A5A5',
      100: '#888888',
      200: '#303030'
    }
  }
}

export const darkTheme = {
  primary: '#219653',
  lightGreen:'#6FCF97',
  secondary: '#303030',
  white:'#1F2223',
  darkGrey:"#181A1B",
    grey: {
    50: '#1F2223',
    75: '#BDBDBD',
    100: '#A5A5A5',
    150: '#888888',
    200: '#7d7d7d',
    400: '#363636',
    600: '#1a202c',
  },
  text:{
    primary: '#219653',
    black: '#000000',
    white:'#FFFFFF',
    grey:{
      50: '#A5A5A5',
      100: '#888888',
      200: '#D3D3D3'
    }
  }
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider:React.FC = ({children}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const customTheme = extendTheme({ colors:{...(theme === "dark" ? darkTheme : lightTheme)} })

  useEffect(() => {
    const saveTheme = localStorage.getItem("@RegisterTheme")
  },[])

  const alterTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("@RegisterTheme", newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        alterTheme
      }}
    >
      <ChakraProvider theme={customTheme} >
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}

export {
  ThemeProvider,
  useThemeContext
}
