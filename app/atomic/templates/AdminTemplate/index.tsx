import UserMenu from '@app/atomic/molecules/UserMenu'
import SideBar from '@app/atomic/organisms/SideBar'
import { Flex } from '@chakra-ui/react'
import React from 'react'
const AdminTemplate : React.FC = ({children}) => {
  return (
    <>
      <Flex height="100vh">
        <SideBar/>
        <Flex flex={1} height="100%" bg="grey.50">
          <UserMenu/>
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default AdminTemplate