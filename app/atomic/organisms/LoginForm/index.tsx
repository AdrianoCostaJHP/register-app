import { Box, Button, Flex } from "@chakra-ui/react"
import { SubmitHandler } from "@unform/core"
import { Form } from "@unform/web"
import InputField from "../../molecules/InputField"

type LoginFormProps = {
  onSubmit: SubmitHandler;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  
  return (
    <Flex flex={1}>
      <Flex 
        w="100%"
        h="100%"
        backgroundImage="url(/assets/bg_form.svg)"
        backgroundRepeat="no-repeat" 
        backgroundPosition="left"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box bg="white" padding={35} borderRadius={40} w="100%" maxW="420px">
          <Form onSubmit={onSubmit}>
            <InputField name="login" label="Login" mb="35px"/>
            <InputField name="password" label="Senha" type="password" mb="44px"/>
            <Button 
              type="submit" 
              bg="primary" 
              color="white"
              borderRadius="none"
              fontSize="24px"
              fontWeight="900"
              py="19px"
              px="35px"
              h="60px"
              _hover={{}}
              >
              Login
            </Button>
          </Form>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LoginForm