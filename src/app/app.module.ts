import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { SigninComponent } from './components/authentication/signin/signin.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TeamUserListComponent } from './components/main/team/team-user-list/team-user-list.component';
import { FolderListComponent } from './components/main/folder/folder-list/folder-list.component';
import { FolderFormComponent } from './components/main/folder/folder-form/folder-form.component';
import { FolderEditComponent } from './components/main/folder/folder-edit/folder-edit.component';
import { FolderCreateComponent } from './components/main/folder/folder-create/folder-create.component';
import { ScenarioCaseComponent } from './components/main/scenario/scenario-case/scenario-case.component';
import { ScenarioCreateComponent } from './components/main/scenario/scenario-create/scenario-create.component';
import { ScenarioEditComponent } from './components/main/scenario/scenario-edit/scenario-edit.component';
import { ScenarioListComponent } from './components/main/scenario/scenario-list/scenario-list.component';
import { ScenarioFormComponent } from './components/main/scenario/scenario-form/scenario-form.component';
import { ListComponent } from './components/common/list/list.component';
import { ScenarioViewComponent } from './components/main/scenario/scenario-view/scenario-view.component';
import { UserEditComponent } from './components/main/team/user-edit/user-edit.component';
import { UserViewComponent } from './components/main/team/user-view/user-view.component';
import { UserFormComponent } from './components/main/team/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SigninComponent,
    MainNavComponent,
    TeamUserListComponent,
    FolderListComponent,
    FolderFormComponent,
    FolderEditComponent,
    FolderCreateComponent,
    ScenarioCaseComponent,
    ScenarioCreateComponent,
    ScenarioEditComponent,
    ScenarioListComponent,
    ScenarioFormComponent,
    ListComponent,
    ScenarioViewComponent,
    UserEditComponent,
    UserViewComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
