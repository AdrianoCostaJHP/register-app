import { RegisterDrawer } from "@app/atomic/organisms/RegisterDrawer"
import RegisterList from "@app/atomic/organisms/RegisterList"
import AdminTemplate from "@app/atomic/templates/AdminTemplate"
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react"

const Register = () => {
  const {isOpen, onToggle, onClose} = useDisclosure()

  return (
   <AdminTemplate>
     <RegisterDrawer isOpen={isOpen} onClose={onClose} />
      <Flex 
        w="100%" 
        padding="2.5rem 9rem 6rem" 
        direction="column"  
        justifyContent="center"
        alignItems="center"
      >
        <Flex w="100%" marginBottom="2rem" justifyContent="flex-end">
          <Button 
            height="4rem"
            padding="1rem 1.5rem" 
            borderRadius="none" 
            onClick={onToggle}
            _hover={{}}
            bg="primary"
          >
            <Text 
              fontFamily="Montserrat"
              fontSize="xl"
              fontWeight="black" 
              color="white"
            >
              Registrar
            </Text>
          </Button>
        </Flex>
        <RegisterList/>
      </Flex>
    </AdminTemplate>
  )
}

export default Register