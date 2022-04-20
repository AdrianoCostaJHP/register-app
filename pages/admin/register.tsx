import RegisterList from "@app/atomic/organisms/RegisterList";
import AdminTemplate from "@app/atomic/templates/AdminTemplate";
import { useAuthContext } from "@app/features/auth/context/authContext";
import { RegisterForm } from "@app/atomic/organisms/RegisterForm";
import { useCreateRegisteredTimeMutation } from "@app/features/register/mutations.generated";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { format, formatISO } from "date-fns";
import { useCallback } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { user } = useAuthContext()

  const [createRegisteredTime] = useCreateRegisteredTimeMutation()

  const onSubmit = useCallback(async (values) => {
    try {
      const formatDate = format(new Date(values?.register), "yyyy-MM-dd'T'HH:mm:ss'Z'")
      await createRegisteredTime({
        variables:{
          data:{
            timeRegistered: formatDate,
            user: "2"
          }
        }
      })
      toast.success('Registro criado com sucesso!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Ocorreu um erro ao fazer o registro!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [createRegisteredTime]);

  return (
    <AdminTemplate>
      <RegisterForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
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
        <RegisterList />
      </Flex>
    </AdminTemplate>
  );
};

export default Register;
