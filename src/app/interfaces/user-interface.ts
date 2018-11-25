import {RoleInterface} from './role-interface';

export interface UserInterface {
  oid: string;
  name: string;
  email: string;
  roles?: RoleInterface;
}
