import {FolderInterface} from '../interfaces/folder-interface';

export class Folder implements FolderInterface {
  oid: string;
  name: string;

  constructor() {
    this.oid = '';
    this.name = '';
  }

}
