import { useCallback } from "react";
import { destroyCookie, setCookie } from "nookies";
import { toast } from "react-toastify";
import {
  LoginMutationVariables,
  useLoginMutation,
} from "../mutations.generated";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/authContext";

export function useAuth() {
  const router = useRouter();
  const [login] = useLoginMutation();
  const { setUser, setToken } = useAuthContext();

  const authenticate = useCallback(
    async (values: LoginMutationVariables) => {
      try {
        const { data } = await login({
          variables: {
            identifier: values?.identifier,
            password: values?.password,
          },
        });

        setCookie(null, "@AuthRegisterToken", `${data?.login?.jwt}`, {
          maxAge: 86400,
          path: "/",
        });
        setToken(String(data?.login?.jwt))
        setUser({ me: data?.login?.user })


        router.push(
          data?.login?.user?.role?.type === "admin"
            ? "/admin/dashboard"
            : "/admin/register"
        );

        toast.success("Autenticado com sucesso!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        toast.error(" Login e/ou senha inválidos", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [login, router, setToken, setUser]
  );

  const logout = () => {
    destroyCookie(null, "@AuthRegisterToken", {
      path: "/",
    });
    setUser({});
    setToken("")
    router.push("/auth/login");
  }

  return {
    authenticate,
    logout,
  };
}
