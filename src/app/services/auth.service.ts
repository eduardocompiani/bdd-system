import { Injectable } from '@angular/core';
import {SignupFormInterface} from '../interfaces/signup-form-interface';
import {SigninFormInterface} from '../interfaces/signin-form-interface';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../model/user';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {UserInterface} from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  loggedUserDoc: AngularFirestoreDocument<User>;
  loggedUser: Observable<User>;
  isLoggedIn$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedUserDoc = this.afs.doc('users/' + user.uid);
        this.loggedUser = this.loggedUserDoc.valueChanges();
        this.isLoggedIn = true;
        this.isLoggedIn$ = of(true);
      } else {
        this.isLoggedIn = false;
        this.isLoggedIn$ = of(false);
      }
    });
  }

  async signupUser( user: SignupFormInterface) {
    const newAccount: any = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then( response => response.user)
      .catch((err) => {
        console.log('error while creating new user', err);
        return false;
      });

    if (newAccount) {
      this.afs.collection('users').doc(newAccount.uid).set({
        'name': user.name,
        'email': user.email,
        'oid': newAccount.uid,
        'roles': {
          'canManageFolders': false,
          'canManageScenarios': false,
          'canManageTeam': false
        }
      });

      this.router.navigate(['/']);
    }
  }

  signinUser(user: SigninFormInterface) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then( (response) => this.router.navigate(['/']))
      .catch(err => console.log('Error while trying to login', err));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
