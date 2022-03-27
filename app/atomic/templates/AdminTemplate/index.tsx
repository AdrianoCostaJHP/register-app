import SideBar from '@app/atomic/organisms/SideBar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
const AdminTemplate : React.FC = ({children}) => {
  return (
    <>
      <Flex height="100vh">
        <SideBar/>
        <Flex bg="red" overflowY="scroll">
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default AdminTemplate