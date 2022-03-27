import  { useCallback } from 'react';
import { destroyCookie, setCookie } from 'nookies';
import { toast } from 'react-toastify';
import { LoginMutationVariables, useLoginMutation } from '../mutations.generated';
import { useRouter } from 'next/router';

 export function useAuth() {
  const router = useRouter()
  const [login] = useLoginMutation()
  
  const authenticate = useCallback( 
    async(values: LoginMutationVariables) => {
      try{
        const {data} = await login({variables:{
          identifier: values?.identifier,
          password: values?.password
        }})

        setCookie(null, '@AuthRegisterToken', `${data?.login?.jwt}`,{
          maxAge: 86400,
          path: '/',
        })
        router.push('/admin/dashboard')

        toast.success('Autenticado com sucesso!', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        }catch(error){
          toast.error(' Login e/ou senha inválidos', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      },[login])

      const logout = useCallback(() => {
        destroyCookie(null, '@AuthRegisterTokenhToken')
        router.replace('/auth/login')
      }, [router])

      return {
        authenticate,
        logout
      }
      
    }
    