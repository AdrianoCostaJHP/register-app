import { RegisterCard } from "@app/atomic/molecules/RegisterCard";
import { GetRegisteredTimesQuery } from "@app/features/register/queries.generated";
import { Flex, Spinner, Text, FlexProps } from "@chakra-ui/react";
import { format } from "date-fns";

type RegisterListProps = {
  data: GetRegisteredTimesQuery | undefined;
};
const RegisterList = ({ data }: RegisterListProps) => {
  return (
    <Flex
      w={{ base: "100%", md: "80%" }}
      h={{ base: "100%", md: "80%" }}
      direction="column"
    >
      <Flex {...flexHeaderContainer}>
        <Text>Colaborador</Text>
        <Text>Data</Text>
        <Text w="7.5rem" textAlign="left">
          Hora
        </Text>
      </Flex>
      <Flex {...flexContent}>
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

const flexHeaderContainer = {
  w: "100%",
  display: { base: "none", md: "flex" },
  justifyContent: "space-between",
  fontSize: "1.5rem",
  color: "text.grey.200",
  padding: "0.7rem 1rem 2rem",
  position: "sticky",
  top: "0",
} as FlexProps;

const flexContent = {
  overflowY: "auto",
  direction: "column",
  padding: "0 1rem",
  gap: "2rem",
  paddingTop: { base: "2rem", md: "none" },
  css: {
    "&::-webkit-scrollbar": {
      width: "0.4rem",
      backgroundColor: "#dddddd",
      borderRadius: "30px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#219653",
      borderRadius: "30px",
    },
  },
} as FlexProps;
