import { Injectable } from '@angular/core';
import {FolderInterface} from '../interfaces/folder-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folderCollection: AngularFirestoreCollection<FolderInterface>;

  constructor(private afs: AngularFirestore) {
    this.folderCollection = this.afs.collection('folders');
  }

  getList() {
    return this.folderCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          return a.payload.doc.data();
        });
      })
    );
  }

  getByUid(uid: string) {
    return this.folderCollection.doc(uid).snapshotChanges().pipe(
      map(res => {
        return res.payload.data();
      })
    );
  }

  create(folder: FolderInterface) {
    folder.oid = this.afs.createId();
    this.update(folder);
  }

  update(folder: FolderInterface) {
    this.folderCollection.doc(folder.oid).set({
      'oid': folder.oid,
      'name': folder.name
    });
  }

  delete(folder: FolderInterface) {
    this.folderCollection.doc(folder.oid).delete();
  }
}
