import {UserInterface} from '../interfaces/user-interface';
import {Role} from './role';

export class User implements UserInterface {
  email: string;
  name: string;
  roles: Role;
  uid: string;

  constructor(user: UserInterface) {
    this.email = user.email;
    this.name = user.name;
    this.roles = user.roles;
    this.uid = user.uid;
  }
}
