import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserInterface;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getByOid(this.route.snapshot.params['id']).subscribe(user => {
      this.user = user as UserInterface;
    });
  }

  saveUser(user: UserInterface) {
    this.userService.update(user);
    this.router.navigate(['/team/']);
  }

}
