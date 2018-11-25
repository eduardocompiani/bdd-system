import {UserInterface} from '../interfaces/user-interface';
import {Role} from './role';

export class User implements UserInterface {
  email: string;
  name: string;
  roles: Role;
  oid: string;

  constructor(user: UserInterface) {
    this.email = user.email;
    this.name = user.name;
    this.roles = user.roles;
    this.oid = user.oid;
  }
}
