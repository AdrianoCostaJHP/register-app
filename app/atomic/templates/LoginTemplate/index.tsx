import { useCallback } from "react"
import { Flex } from "@chakra-ui/react"
import { colors } from "../../../common/theme/colors"
import Image from "next/image"
import LoginForm from "../../organisms/LoginForm"
import { useAuth } from "@app/features/auth/hooks/useAuth"

const LoginTemplate = () => {

  const {authenticate} = useAuth()

  const onSubmit = useCallback(async (values) => {
    if(values?.login && values?.password){
      await authenticate({
          identifier: values?.login,
          password: values?.password
      })
    }
  },[authenticate])

  return (
    <Flex background={colors.secondary}>
      <Flex direction="column" flex={1} h="100vh"  justifyContent="center">
        <Image src="/assets/bg_register.svg" alt="Register" width="400px" height="370px"/>
      </Flex>
      <LoginForm onSubmit={onSubmit}/>
    </Flex>
  )
}

export default LoginTemplate