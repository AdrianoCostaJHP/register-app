import { SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Text,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useAuthContext } from "@app/features/auth/context/authContext";
import InputField from "@app/atomic/molecules/InputField";

type RegisterFormProps = {
  isOpen: boolean;
  onClose(): void;
  onSubmit: SubmitHandler;
};

export const RegisterForm = ({
  isOpen,
  onClose,
  onSubmit,
}: RegisterFormProps) => {
  const { user } = useAuthContext();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm">
      <DrawerOverlay />
      <Form onSubmit={onSubmit}>
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
            <Flex direction="column" w="100%" gap="50px" paddingTop="50px">
              <Box>
                <Text
                  fontFamily="Montserrat"
                  color="secondary"
                  fontWeight="normal"
                  fontSize="0.9rem"
                >
                  Colaborador
                </Text>
                <Text
                  fontFamily="Montserrat"
                  color="secondary"
                  fontWeight="light"
                  fontSize="2xl"
                  marginTop="0.3rem"
                >
                  {user?.me?.username}
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="Montserrat"
                  color="secondary"
                  fontWeight="normal"
                  fontSize="0.9rem"
                  marginBottom="0.8rem"
                >
                  Data/Hora
                </Text>
                <InputField
                  type="datetime-local"
                  name="register"
                  defaultValue={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                  bg="grey.50"
                  isReadOnly
                  color="grey.150"
                  fontFamily="Nunito"
                  fontWeight="light"
                  letterSpacing="2px"
                  paddingLeft="2.5rem"
                  css={{
                    "::-webkit-calendar-picker-indicator": {
                      display: "none",
                    },
                  }}
                />
              </Box>
            </Flex>
          </DrawerBody>
          <DrawerFooter padding="0">
            <Flex
              w="100%"
              padding="1.8rem 2.5rem"
              borderTopWidth="1px"
              borderTop="0.3px solid grey.400"
              gap="1.5rem"
            >
              <Button
                w="100%"
                paddingTop="0.7rem"
                paddingBottom="0.7rem"
                bg="primary"
                borderRadius="none"
                type="submit"
              >
                <Text
                  fontFamily="Montserrat"
                  fontWeight="black"
                  fontSize="lg"
                  color="white"
                >
                  Salvar
                </Text>
              </Button>

              <Button
                w="100%"
                bg="white"
                border="1px solid"
                borderColor="primary"
                borderRadius="none"
                onClick={onClose}
              >
                <Text
                  fontFamily="Montserrat"
                  fontWeight="black"
                  fontSize="lg"
                  color="primary"
                >
                  Cancelar
                </Text>
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Form>
    </Drawer>
  );
};
