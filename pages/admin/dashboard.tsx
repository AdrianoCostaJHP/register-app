import RegisterList from "@app/atomic/organisms/RegisterList"
import AdminTemplate from "@app/atomic/templates/AdminTemplate"
import { Flex } from "@chakra-ui/react"

const Dashboard = () => {
  return (
    <AdminTemplate>
      <Flex 
        w="100%" 
        padding="6rem 9rem" 
        justifyContent="center"
      >
        <RegisterList/>
      </Flex>
    </AdminTemplate>
  )
}

export default Dashboard
