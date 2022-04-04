import { RegisterCard } from "@app/atomic/molecules/RegisterCard"
import { Flex, Spinner, Text } from "@chakra-ui/react"

const RegisterList = () => {

  const data = [
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
    {
      name:"Adriano",
      date:"24/12/2000",
      time:'13:34'
    },
  ]

  return (
    <Flex w="100%" paddingRight="1rem" direction="column" overflowY="auto" css={{
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
        bg="grey.50"
        color="secondary"
        padding="0.7rem 0.4rem 2rem"
        position="sticky"
        top="0"
        background= "linear-gradient(180deg, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 65%, rgba(242,242,242,0.5550595238095238) 100%)"
      >
          <Text>Colaborador</Text>
          <Text>Data</Text>
          <Text w="7.5rem" textAlign="left">Hora</Text>
      </Flex>
      <Flex direction="column" gap="2rem">
        {data?.map(({name, time, date}, index) => (
          <RegisterCard 
            key={index} 
            index={index + 1}
            name={name} 
            date={date} 
            time={time}
          />
        ))}
        <Spinner color="primary" marginX="auto"/>
      </Flex>
    </Flex> 
  )
}
export default RegisterList