import React from "react";
import { useThemeContext } from "@app/common/theme/themeContext";
import { useAuthContext } from "@app/features/auth/context/authContext";
import {
  Avatar,
  Box,
  Text,
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

  return (
    <Box position="absolute" top="5%" right="5%">
      <Popover strategy="fixed">
        <PopoverTrigger>
          <Avatar
            name={user?.me?.username}
            size="md"
            src="/assets/default_avatar.svg"
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
      </Box>
  );
};
export default UserMenu;


const content = (isDark: boolean) => {
  return {
    display: "flex",
    flexDir: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 12,
    rowGap:"2rem",
    boxShadow: "3px 4px 17px 0px rgba(0, 0, 0, 0.1)",
    bg: isDark ? "darkGrey" : "white",
    transition: "ease-linear .3s",
    padding: "2rem 1rem",
    zIndex: 10
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
