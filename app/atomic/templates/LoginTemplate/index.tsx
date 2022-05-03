import { Flex } from "@chakra-ui/react"
import { useAuth } from "@app/features/auth/hooks/useAuth"
import Image from "next/image"
import LoginForm from "../../organisms/LoginForm"
import { useAuthContext } from "@app/features/auth/context/authContext"

type OnSubmitProps = {
  login: string
  password:string
}

const LoginTemplate = () => {
  const {authenticate} = useAuth()
  const {token, user} = useAuthContext()

  const onSubmit = async ({ login, password }:OnSubmitProps) => {
      if(login && password){
        await authenticate({
          identifier: login,
          password
        })
      }
  }

  return (
    <Flex background="secondary" direction={{base:'column', md:'row', lg:'row', xl:'row'}} height="100vh">
      <Flex direction="column" flex={1} justifyContent="center" >
        <Image src="/assets/bg_register.svg" alt="Register" width="100%" height="370px" objectFit="contain"/>
      </Flex>
      <LoginForm onSubmit={onSubmit}/>
    </Flex>
  )
}

export default LoginTemplate