import { Drawer, DrawerOverlay, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerCloseButton, Flex, Text, Box} from "@chakra-ui/react"

type RegisterDrawerProps = {
  isOpen: any
  onClose: any
}

export const RegisterDrawer = ({ isOpen, onClose}: RegisterDrawerProps) => {

  return(
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader 
          padding="1.8rem 2rem" 
          borderBottomWidth="1px" 
          borderBottom="0.3px solid grey.400"
        >
          <Text 
            fontFamily="Montserrat" 
            fontSize="md" 
            fontWeight="light"
            color="secondary"
          >
            Novo Registro
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Flex w="100%">
            <Box>
              <Text>Colaborador</Text>
              <Text></Text>
            </Box>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}