import { useThemeContext } from "@app/common/theme/themeContext";
import { useAuthContext } from "@app/features/auth/context/authContext";
import { useAuth } from "@app/features/auth/hooks/useAuth";
import { Flex, Box, Img, Text, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./routes";

const SideBar = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { user } = useAuthContext();
  const { theme } = useThemeContext()

  return (
    <Flex
      h="100vh"
      bg={theme === "dark" ? "darkGrey" : "white"}
      minW="136px"
      padding="1rem 0px"
      direction="column"
      boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.1)"
      justifyContent="space-between"
    >
      <Box>
        <Flex justifyContent="center">
          <Img w="3.5rem" height="3.5rem" src="/assets/logo.svg" alt="logo" />
        </Flex>
        <Flex direction="column" h="100%">
          {routes?.map((route, index) => {
            if (
              route.roles.some((route) =>
                route.includes(`${user?.me?.role?.type}`)
              )
            ) {
              return (
                <Flex
                  key={index}
                  color={router.asPath === route.path ? "primary" : "grey.100"}
                  direction="column"
                >
                  <Flex
                    w="100%"
                    padding="1.5rem 0px"
                    justifyContent="space-between"
                    css={{
                      ":before": {
                        content: '""',
                        width: "4px",
                        marginLeft: "1px",
                        ...(router.asPath === route?.path && {
                          height: "100%",
                          background: "primary",
                          borderRadius: "30px",
                        }),
                      },
                      ":after": {
                        content: '""',
                      },
                    }}
                  >
                    <Link href={route?.path}>
                      <Flex
                        direction="column"
                        alignItems="center"
                        gap="0.5rem"
                        padding="0.5rem 0px"
                      >
                        <Img
                          w="24px"
                          h="24px"
                          src={`/assets/${
                            route?.icon +
                            (router.asPath === route.path ? "_active" : "")
                          }.svg`}
                          alt={`sideBar-${index}`}
                        />
                        <Text flexWrap="wrap" fontSize="md" fontWeight="light">
                          {route?.name}
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                  <Divider w="80%" margin="0 auto" />
                </Flex>
              );
            }
          })}
        </Flex>
      </Box>

      <Flex justifyContent="center">
        <Button variant="unstyled" onClick={logout}>
          <Img w="2rem" height="2rem" src="/assets/logout.svg" alt="logout" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideBar;
