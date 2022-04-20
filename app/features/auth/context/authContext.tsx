import { api } from "@app/common/services/api";
import { parseCookies } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import {
  GetMeQuery,
  GetMeQueryResult,
  useGetMeQuery,
} from "../queries.generated";

export type AuthContextProps = {
  user: GetMeQuery;
  token: string | undefined;
};

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<GetMeQuery>({});
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const tokens = parseCookies();
    const authToken = tokens["@AuthRegisterToken"];
    authToken && setToken(authToken);
  }, [token]);

  useEffect(() => {
    console.log(token);

    const authUser = localStorage.getItem("@register_authUser");

    const getUserAuth = async () => {
      try {
        const { data } = await api.post(
          "",
          {
            operationName: "getMe",
            query: `query getMe { me { id  username role { type } } }`,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        data && setUser(data?.data)
      } catch (error) {}

    };

    token && getUserAuth();

  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuthContext };
