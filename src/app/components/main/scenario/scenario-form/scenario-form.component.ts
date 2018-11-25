import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';
import {FolderService} from '../../../../services/folder.service';
import {Observable} from 'rxjs';
import {FolderInterface} from '../../../../interfaces/folder-interface';

@Component({
  selector: 'app-scenario-form',
  templateUrl: './scenario-form.component.html',
  styleUrls: ['./scenario-form.component.css']
})
export class ScenarioFormComponent implements OnInit {

  folders: Observable<FolderInterface[]>;
  @Input() scenario: ScenarioInterface;
  @Input() editable: boolean = false;
  @Output() onSave = new EventEmitter();

  constructor(private folderService: FolderService) { }

  ngOnInit() {
    this.folders = this.folderService.getList();

    if (!this.scenario) {
      this.scenario = {
        description: '',
        folder: '',
        cases: [
          {
            testGiven: '',
            testWhen: '',
            testThen: ''
          }
        ]
      };
    }
  }

  addCase() {
    this.scenario.cases.push({
      testGiven: '',
      testWhen: '',
      testThen: ''
    });
  }

  emitSave() {
    this.onSave.emit(this.scenario);
  }

  deleteCase(index: number) {
    this.scenario.cases.splice(index - 1, 1);
  }
}
