import { Injectable } from '@angular/core';
import {FolderInterface} from '../interfaces/folder-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ServiceUtils} from '../utils/service-utils';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderCollection: AngularFirestoreCollection<FolderInterface>;

  constructor(private afs: AngularFirestore,
              private serviceUtils: ServiceUtils) {
    this.folderCollection = this.afs.collection('folders');
  }

  getList() {
    return this.serviceUtils.getList(this.folderCollection);
  }

  getByUid(uid: string) {
    return this.serviceUtils.getByOid(this.folderCollection, uid);
  }

  create(folder: FolderInterface) {
    this.serviceUtils.create(folder, this.folderCollection);
  }

  update(folder: FolderInterface) {
    this.serviceUtils.update(folder, this.folderCollection);
  }

  delete(folder: FolderInterface) {
    this.serviceUtils.delete(folder, this.folderCollection);
  }
}
