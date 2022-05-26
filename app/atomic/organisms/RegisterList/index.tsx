import { RegisterCard } from "@app/atomic/molecules/RegisterCard";
import { useThemeContext } from "@app/common/theme/themeContext";
import { GetRegisteredTimesQuery } from "@app/features/register/queries.generated";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { format } from "date-fns";

type RegisterListProps = {
  data: GetRegisteredTimesQuery | undefined;
};
const RegisterList = ({ data }: RegisterListProps) => {
  return (
    <Flex w="80%" h="80%" paddingRight="1rem" direction="column">
      <Flex
        w="100%"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        fontSize="1.5rem"
        color="text.grey.200"
        padding="0.7rem 1rem 2rem"
        position="sticky"
        top="0"
      >
        <Text>Colaborador</Text>
        <Text>Data</Text>
        <Text w="7.5rem" textAlign="left">
          Hora
        </Text>
      </Flex>
      <Flex
        direction="column"
        gap="2rem"
        overflowY="auto"
        padding="0 1rem"
        css={{
          "&::-webkit-scrollbar": {
            width: "0.4rem",
            backgroundColor: "#dddddd",
            borderRadius: "30px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#219653",
            borderRadius: "30px",
          },
        }}
      >
        {data?.registeredTimes?.map((register, index) => (
          <RegisterCard
            key={register?.id}
            index={index + 1}
            name={register?.user?.name}
            date={format(new Date(register?.timeRegistered), "dd/MM/yyyy")}
            time={format(new Date(register?.timeRegistered), "HH:mm")}
          />
        ))}
        <Spinner color="primary" marginX="auto" />
      </Flex>
    </Flex>
  );
};
export default RegisterList;
