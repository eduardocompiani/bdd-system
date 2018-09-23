import {RoleInterface} from './role-interface';

export interface UserInterface {
  uid: string;
  name: string;
  email: string;
  roles?: RoleInterface;
}
