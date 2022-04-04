import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import React from "react"

type RegisterCardProps = {
  name: string;
  date: string
  time: string
  index: number
} & FlexProps

export const RegisterCard = ({name, date, time, index, ...props}:RegisterCardProps) => {
  return (
    <Flex 
      borderRadius="15px" 
      padding="0.8rem 1.5rem" 
      bg="white" 
      boxShadow=" 0px 0px 12px 0px rgba(0, 0, 0, 0.1)"
      {...props}
      css={{
        '::before':{
          content:'" "',
          width: '5px',
          borderRadius: "30px",
          backgroundColor:'lightGreen',
        }
      }}
    >
      <Flex 
        w="100%" 
        marginLeft="5rem" 
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text 
            fontSize="xl" 
            fontWeight="regular" 
            lineHeight="2rem"
            textAlign="unset"
          >
            {name}
          </Text>
          <Text 
            fontSize="11px" 
            fontWeight="regular" 
            lineHeight="1rem"
          >
            {("00"+index).slice(-3)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="regular" color="grey.150">{date}</Text>
        </Box>
        <Box>
          <Text fontSize="2.5rem" fontWeight="bold" color="grey.150" lineHeight="3rem">{time}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}