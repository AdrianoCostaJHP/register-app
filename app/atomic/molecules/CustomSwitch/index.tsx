import {
  Box,
  Flex,
  Text,
  useDisclosure,
  FlexProps,
  BoxProps,
} from "@chakra-ui/react";

type CustomSwitchProps = {
  onPress: () => void | undefined;
};

const CustomSwitch = ({ onPress }: CustomSwitchProps) => {
  const { isOpen: isDark, onToggle: onToggleDark } = useDisclosure();
  return (
    <Flex
      onClick={() => {
        onToggleDark();
        onPress();
      }}
      {...container(isDark)}
    >
      <Text
        fontWeight="semibold"
        visibility={isDark ? "visible" : "hidden"}
        color="text.white"
      >
        OFF
      </Text>
      <Box {...switchContent(isDark)} />
      <Text
        fontWeight="semibold"
        visibility={isDark ? "hidden" : "visible"}
        color="text.grey.200"
      >
        ON
      </Text>
    </Flex>
  );
};

export default CustomSwitch;

const container = (isDark: boolean) => {
  return {
    borderRadius: "1rem",
    alignItems: "center",
    boxShadow: "3px 4px 17px 0px rgba(0, 0, 0, 0.1)",
    bg: isDark ? "grey.400" : "white",
    padding: "5px 8px 5px 8px",
    transition: "all .3s",
    display: "flex",
    width: "5rem",
    position: "relative",
    css: {
      "> div": {
        transform: isDark ? "translateX(2.5rem)" : "",
      },
    },
  } as FlexProps;
};

const switchContent = (isDark: boolean) => {
  return {
    w: "1.5rem",
    h: "1.5rem",
    position: "absolute",
    transition: "ease .3s",
    borderRadius: "0.75rem",
    boxShadow: "3px 4px 17px 0px rgba(0, 0, 0, 0.1)",
    background: "text.grey.200",
  } as BoxProps;
};
