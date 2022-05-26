import { Flex } from "@chakra-ui/react";
import { useAuth } from "@app/features/auth/hooks/useAuth";
import Image from "next/image";
import LoginForm from "../../organisms/LoginForm";
import { useAuthContext } from "@app/features/auth/context/authContext";

type OnSubmitProps = {
  login: string;
  password: string;
};

const LoginTemplate = () => {
  const { authenticate } = useAuth();

  const onSubmit = async ({ login, password }: OnSubmitProps) => {
    if (login && password) {
      await authenticate({
        identifier: login,
        password,
      });
    }
  };

  return (
    <Flex
      background="secondary"
      direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
      height="100vh"
    >
      <Flex
        flex={{ base: 0.4, md: 0.7, lg: 1, xl: 1 }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w="50%"
          h="50%"
          backgroundImage="url(/assets/bg_register.svg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="contain"
        />
      </Flex>
      <LoginForm onSubmit={onSubmit} />
    </Flex>
  );
};

export default LoginTemplate;
