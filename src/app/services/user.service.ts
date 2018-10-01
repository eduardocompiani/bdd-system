import { Injectable } from '@angular/core';
import {UserInterface} from '../interfaces/user-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<UserInterface>;
  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
  }

  update(user: UserInterface) {
    this.userCollection.doc(user.uid).set({
      'name': user.name,
      'email': user.email,
      'uid': user.uid,
      'roles': {
        'canManageFolders': false,
        'canManageScenarios': false,
        'canManageTeam': false
      }
    });
  }

}
