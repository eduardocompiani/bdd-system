import { Injectable } from '@angular/core';
import {SignupFormInterface} from '../interfaces/signup-form-interface';
import {SigninFormInterface} from '../interfaces/signin-form-interface';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../model/user';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  loggedUserDoc: AngularFirestoreDocument<User>;
  loggedUser: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedUserDoc = this.afs.doc('users/' + user.uid);
        this.loggedUser = this.loggedUserDoc.valueChanges();
        console.log(this.loggedUser);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  async signupUser( user: SignupFormInterface) {
    const newAccount: any = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then( response => response.user)
      .catch(err => console.log('error while creating new user', err));

    this.afs.collection('users').doc(newAccount.uid).set({
      'name': user.name,
      'email': user.email,
      'uid': newAccount.uid,
      'roles': {
        'canManageFolders': false,
        'canManageScenarios': false,
        'canManageTeam': false
      }
    });
  }

  signinUser(user: SigninFormInterface) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( response => console.log('Logged in', response, response.user.uid))
      .catch(err => console.log('Error while trying to login', err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
