import { colors } from "@app/common/theme/colors"
import { Box, Flex, Img, Text } from "@chakra-ui/react"
import { url } from "inspector"

const Erro404 = () => {
  return (
    <Flex direction="column" bg={colors.secondary} alignItems="center" justifyContent="center" height="100vh">
      <Img height="20%"src="/assets/logo.svg" alt="Logo"/>
      <Box textAlign="center" color={colors.primary} >
        <Text fontFamily="heading" fontSize={{base:'4xl', lg:'9xl'}}>Erro 404</Text>
        <Text fontSize="2xl">Não foi possível encontrar a página</Text>
      </Box>
    </Flex>
  )
}

export default Erro404