import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-team-user-list',
  templateUrl: './team-user-list.component.html',
  styleUrls: ['./team-user-list.component.css']
})
export class TeamUserListComponent implements OnInit {

  users: any;
  name = 'name';
  canManage;

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.users = this.userService.getList();
    this.canManage = this.authService.loggedUser;
  }

  edit(user) {
    this.router.navigate(['/team/edit/' + user.oid]);
  }

  view(user) {
    this.router.navigate(['/team/view/' + user.oid]);

  }

}
