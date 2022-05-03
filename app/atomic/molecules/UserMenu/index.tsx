import React from "react";
import { useThemeContext } from "@app/common/theme/themeContext";
import { useAuthContext } from "@app/features/auth/context/authContext";
import {
  Avatar,
  Flex,
  Box,
  Text,
  useDisclosure,
  Switch,
  TextProps,
  FlexProps,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
} from "@chakra-ui/react";
import CustomSwitch from "../CustomSwitch";

const UserMenu = () => {
  const { user } = useAuthContext();
  const { alterTheme, theme } = useThemeContext();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex {...containerMenu}>
      <Popover>
        <PopoverTrigger>
          <Avatar
            name={user?.me?.username}
            size="md"
            src="/assets/default_avatar.svg"
            position="relative"
            cursor="pointer"
          />
        </PopoverTrigger>
        <PopoverContent
          w="auto"
          h="auto"
        >
          <PopoverBody p="0" w="100">
            <Box {...content(theme === "dark")}>
              <Box {...item}>
                <Text {...textItem}>Usuário</Text>
                <Text {...textItem}>{user?.me?.username}</Text>
              </Box>
              <Box>
                <Text {...textItem}>Tema Dark</Text>
                <CustomSwitch onPress={alterTheme} />
              </Box>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
export default UserMenu;

const containerMenu = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "5%",
  right: "5%",
} as FlexProps;

const content = (isDark: boolean) => {
  return {
    height: "240px",
    display: "flex",
    flexDir: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 12,
    boxShadow: "3px 4px 17px 0px rgba(0, 0, 0, 0.1)",
    bg: isDark ? "darkGrey" : "white",
    transition: "ease-linear .3s",
    padding: "2rem 1rem",
  } as FlexProps;
};

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
} as FlexProps;

const textItem = {
  color: "text.grey.200",
  fontSize: "lg",
  fontWeight: "semibold",
} as TextProps;
