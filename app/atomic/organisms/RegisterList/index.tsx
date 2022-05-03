import { RegisterCard } from "@app/atomic/molecules/RegisterCard"
import { useThemeContext } from "@app/common/theme/themeContext"
import { GetRegisteredTimesQuery } from "@app/features/register/queries.generated"
import { Flex, Spinner, Text } from "@chakra-ui/react"
import { format } from "date-fns"

type RegisterListProps = {
  data: GetRegisteredTimesQuery | undefined
}
const RegisterList = ({ data }: RegisterListProps) => {
  const { theme } = useThemeContext()
  return (
    <Flex w="80%" h="80%" paddingRight="1rem" direction="column" overflowY="auto" css={{
      '&::-webkit-scrollbar': {
        width: '0.4rem',
        backgroundColor: '#A5A5A5',
        borderRadius:'30px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#219653',
        borderRadius: '30px'
      }
    }} >
      <Flex 
        w="100%" 
        justifyContent="space-between"
        fontSize="1.5rem"
        color="text.grey.200"
        padding="0.7rem 0.4rem 2rem"
        position="sticky"
        top="0"
        background= {theme === "dark" ? "white" : "linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 65%, rgba(242,242,242,0.5550595238095238) 100%)"}
      >
          <Text>Colaborador</Text>
          <Text>Data</Text>
          <Text w="7.5rem" textAlign="left">Hora</Text>
      </Flex>
      <Flex direction="column" gap="2rem">
        {data?.registeredTimes?.map((register,  index) => (
          <RegisterCard 
            key={register?.id} 
            index={index + 1}
            name={register?.user?.name} 
            date={format(new Date(register?.timeRegistered), "dd/MM/yyyy")} 
            time={format(new Date(register?.timeRegistered), "HH:mm")}
          />
        ))}
        <Spinner color="primary" marginX="auto"/>
      </Flex>
    </Flex> 
  )
}
export default RegisterList