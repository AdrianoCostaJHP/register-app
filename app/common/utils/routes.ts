import { RolesEnum } from '@app/common/utils/roles';

type PrivateRoutesProps = {
  [key:string]:{
    roles: RolesEnum[]
  }
}

export const privateRoutes:PrivateRoutesProps = {
  "/admin/dashboard":{
    roles:[RolesEnum.Admin]
  },
  "/admin/register":{
    roles:[RolesEnum.Admin, RolesEnum.User]
  }
}