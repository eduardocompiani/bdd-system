import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/authentication/signup/signup.component';
import {SigninComponent} from './components/authentication/signin/signin.component';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './guards/auth.guard';
import {TeamUserListComponent} from './components/main/team/team-user-list/team-user-list.component';
import {FolderListComponent} from './components/main/folder/folder-list/folder-list.component';
import {FolderCreateComponent} from './components/main/folder/folder-create/folder-create.component';
import {FolderEditComponent} from './components/main/folder/folder-edit/folder-edit.component';
import {ScenarioListComponent} from './components/main/scenario/scenario-list/scenario-list.component';
import {ScenarioEditComponent} from './components/main/scenario/scenario-edit/scenario-edit.component';
import {ScenarioCreateComponent} from './components/main/scenario/scenario-create/scenario-create.component';
import {ScenarioViewComponent} from './components/main/scenario/scenario-view/scenario-view.component';
import {UserEditComponent} from './components/main/team/user-edit/user-edit.component';
import {UserViewComponent} from './components/main/team/user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'team',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: TeamUserListComponent
          }, {
            path: 'edit/:id',
            component: UserEditComponent
          }, {
            path: 'view/:id',
            component: UserViewComponent
          }
        ]
      }, {
        path: 'signup',
        component: SignupComponent
      }, {
        path: 'signin',
        component: SigninComponent
      }, {
        path: 'folder',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: FolderListComponent
          }, {
            path: 'create',
            component: FolderCreateComponent
          }, {
            path: 'edit/:id',
            component: FolderEditComponent
          }
        ]
      }, {
        path: 'scenario',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ScenarioListComponent
          }, {
            path: 'create',
            component: ScenarioCreateComponent
          }, {
            path: 'edit/:id',
            component: ScenarioEditComponent
          }, {
            path: 'view/:id',
            component: ScenarioViewComponent
          }
        ]
      }
    ]
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
