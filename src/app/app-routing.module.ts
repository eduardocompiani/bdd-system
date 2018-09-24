import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/authentication/signup/signup.component';
import {SigninComponent} from './components/authentication/signin/signin.component';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './guards/auth.guard';
import {TeamUserListComponent} from './components/main/team/team-user-list/team-user-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'team',
        component: TeamUserListComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'signup',
        component: SignupComponent
      }, {
        path: 'signin',
        component: SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
