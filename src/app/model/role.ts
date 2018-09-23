import {RoleInterface} from '../interfaces/role-interface';

export class Role implements RoleInterface {
  canManageFolders: boolean;
  canManageScenarios: boolean;
  canManageTeam: boolean;
}
