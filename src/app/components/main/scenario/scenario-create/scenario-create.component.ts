import { Component, OnInit } from '@angular/core';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';
import {FolderService} from '../../../../services/folder.service';
import {FolderInterface} from '../../../../interfaces/folder-interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.component.html',
  styleUrls: ['./scenario-create.component.css']
})
export class ScenarioCreateComponent implements OnInit {

  scenario: ScenarioInterface;
  folders: Observable<FolderInterface[]>;

  constructor(private folderService: FolderService) { }

  ngOnInit() {
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

    this.folders = this.folderService.getList();
  }

  addCase() {
    this.scenario.cases.push({
      testGiven: '',
      testWhen: '',
      testThen: ''
    });
  }

  save() {
    console.log(this.scenario);
  }

  deleteCase(index: number) {
    this.scenario.cases.splice(index - 1, 1);
  }

}
