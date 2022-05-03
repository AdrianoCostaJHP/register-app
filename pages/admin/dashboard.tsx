import RegisterList from "@app/atomic/organisms/RegisterList";
import AdminTemplate from "@app/atomic/templates/AdminTemplate";
import { useGetRegisteredTimesQuery } from "@app/features/register/queries.generated";
import { Flex, Spinner } from "@chakra-ui/react";

const Dashboard = () => {
  const { data, loading } = useGetRegisteredTimesQuery();

  return (
    <AdminTemplate>
      <Flex w="100%" padding="6rem 9rem" justifyContent="center">
        {!data && loading ? (
          <Spinner color="primary" size="md" />
        ) : (
          <RegisterList data={data} />
        )}
      </Flex>
    </AdminTemplate>
  );
};

export default Dashboard;
