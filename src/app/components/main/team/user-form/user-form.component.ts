import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../../../interfaces/user-interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() editable: boolean;
  @Input() user: UserInterface;
  @Output() onSave = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if (!this.user) {
      this.user = {
        oid: '',
        name: '',
        email: '',
        roles: {
          canManageScenarios: false,
          canManageFolders: false,
          canManageTeam: false
        }
      };
    }
  }

  emitSave() {
    this.onSave.emit(this.user);
  }

}
