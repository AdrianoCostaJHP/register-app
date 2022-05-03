import { api } from "@app/common/services/api";
import { parseCookies } from "nookies";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GetMeQuery,
} from "../queries.generated";

export type AuthContextProps = {
  user: GetMeQuery;
  setUser: Dispatch<SetStateAction<any>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<GetMeQuery>({});
  const [token, setToken] = useState<string>("");
  
  useEffect(() => {
    const tokens = parseCookies();
    const authToken = tokens["@AuthRegisterToken"];
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  useEffect(() => {
    if(token.length !== 0) {
      try {
        api
        .post(
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
        )
        .then((response) => setUser(response?.data?.data))
        .catch((error) => console.log({ error }));
    } catch (error) {
      console.log({ error });
    }
  }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
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
