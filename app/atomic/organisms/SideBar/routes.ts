import { GetRolesQuery } from './../../../features/auth/queries.generated';
import { GetRolesDocument } from "@app/features/auth/queries.generated";
import { RolesEnum } from '@app/common/utils/roles';

export const routes = [
  {
    path: '/admin/dashboard',
    name:'Dashboard',
    icon:'dashboard',
    roles: [RolesEnum.Admin]
  },
  {
    path: '/admin/register',
    name: 'Meus Registros',
    icon:'note',
    roles: [RolesEnum.Admin, RolesEnum.User]
  }
]