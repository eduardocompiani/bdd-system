import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../../../interfaces/user-interface';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: UserInterface;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getByOid(this.route.snapshot.params['id']).subscribe(user => {
      this.user = user as UserInterface;
    });
  }

}
