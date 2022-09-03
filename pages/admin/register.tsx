import RegisterList from "@app/atomic/organisms/RegisterList";
import AdminTemplate from "@app/atomic/templates/AdminTemplate";
import { useAuthContext } from "@app/features/auth/context/authContext";
import { RegisterForm } from "@app/atomic/organisms/RegisterForm";
import { useCreateRegisteredTimeMutation } from "@app/features/register/mutations.generated";
import {
  Button,
  Flex,
  Spinner,
  Text,
  useDisclosure,
  ButtonProps,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useGetRegisteredTimesQuery } from "@app/features/register/queries.generated";

const Register = () => {
  const { user } = useAuthContext();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [createRegisteredTime] = useCreateRegisteredTimeMutation();
  const { data, loading } = useGetRegisteredTimesQuery({
    variables: {
      filter: {
        user: {
          id: user?.me?.id,
        },
      },
    },
  });

  const onSubmit = useCallback(
    async (values) => {
      try {
        const formatDate = format(
          new Date(values?.register),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        );
        await createRegisteredTime({
          variables: {
            data: {
              timeRegistered: formatDate,
              user: "2",
            },
          },
        });
        toast.success("Registro criado com sucesso!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        toast.error("Ocorreu um erro ao fazer o registro!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [createRegisteredTime]
  );

  return (
    <AdminTemplate>
      <RegisterForm isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
      <Flex
        w="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {loading ? (
          <Spinner color="primary" size="md" />
        ) : (
          <>
            <Flex w="80%" justifyContent="flex-end">
              <Button {...buttonContainer} onClick={onToggle} />
            </Flex>
            <RegisterList data={data} />
          </>
        )}
      </Flex>
    </AdminTemplate>
  );
};

const buttonContainer = {
  w: "3rem",
  h: "3rem",
  bg: "primary",
  borderRadius: "50%",
  position: "absolute",
  bottom: "5%",
  right: "5%",
  _after:{
    content:'" "',
    w: "0.2rem",
    h:"50%",
    borderRadius: 12,
    bg: "white",
    transform: "rotate(90deg)",
  },
  _before:{
    content:'" "',
    w: "0.2rem",
    h:"50%",
    borderRadius: 12,
    bg: "white",
    transform: "rotate(-90deg)",
  }
} as ButtonProps;

export default Register;
