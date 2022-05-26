import { useThemeContext } from "@app/common/theme/themeContext";
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import React from "react";

type RegisterCardProps = {
  name?: string | null;
  date: string;
  time: string;
  index: number;
} & FlexProps;

export const RegisterCard = ({
  name,
  date,
  time,
  index,
  ...props
}: RegisterCardProps) => {
  const { theme } = useThemeContext();
  return (
    <Flex
      borderRadius="15px"
      padding="0.8rem 1.5rem"
      bg={theme === "dark" ? "darkGrey" : "white"}
      boxShadow=" 0px 0px 12px 0px rgba(0, 0, 0, 0.1)"
      {...props}
      css={{
        "::before": {
          content: '" "',
          width: "5px",
          borderRadius: "30px",
          backgroundColor: "lightGreen",
        },
      }}
    >
      <Flex
        w="100%"
        marginLeft={{ base: "2rem", md: "5rem" }}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text
            fontSize="xl"
            fontWeight="regular"
            lineHeight="2rem"
            textAlign="unset"
            color="text.grey.200"
          >
            {name}
          </Text>
          <Text
            fontSize="11px"
            fontWeight="regular"
            lineHeight="1rem"
            color="text.grey.200"
          >
            {("00" + index).slice(-3)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="regular" color="text.grey.100">
            {date}
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="2.5rem"
            fontWeight="bold"
            color="text.grey.100"
            lineHeight="3rem"
          >
            {time}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
