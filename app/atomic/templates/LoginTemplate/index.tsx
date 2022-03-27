import { useCallback } from "react"
import { Flex } from "@chakra-ui/react"
import { colors } from "../../../common/theme/colors"
import Image from "next/image"
import LoginForm from "../../organisms/LoginForm"
import { useAuth } from "@app/features/auth/hooks/useAuth"

const LoginTemplate = () => {
  const {authenticate} = useAuth()

  const onSubmit = useCallback(async (values) => {
    try {
      if(values?.login && values?.password){
        await authenticate({
          identifier: values?.login,
          password: values?.password
        })
      }
    } catch (error) {
      
    }
  },[authenticate])

  return (
    <Flex background={colors.secondary} direction={{base:'column', md:'row', lg:'row', xl:'row'}} height="100vh">
      <Flex direction="column" flex={1} justifyContent="center" >
        <Image src="/assets/bg_register.svg" alt="Register" width="100%" height="370px" objectFit="contain"/>
      </Flex>
      <LoginForm onSubmit={onSubmit}/>
    </Flex>
  )
}

export default LoginTemplate