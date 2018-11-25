import { Injectable } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ServiceUtils} from '../utils/service-utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<UserInterface>;

  constructor(private afs: AngularFirestore,
              private serviceUtils: ServiceUtils
  ) {
    this.userCollection = this.afs.collection('users');
  }

  getList() {
    return this.serviceUtils.getList(this.userCollection);
  }

  getByOid(oid: string) {
    return this.serviceUtils.getByOid(this.userCollection, oid);
  }

  update(user: UserInterface) {
    this.serviceUtils.update(user, this.userCollection);
  }

}
