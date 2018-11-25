import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScenarioCaseInterface} from '../../../../interfaces/scenario-case-interface';

@Component({
  selector: 'app-scenario-case',
  templateUrl: './scenario-case.component.html',
  styleUrls: ['./scenario-case.component.css']
})
export class ScenarioCaseComponent implements OnInit {

  panelOpenState: boolean;

  @Input() index: number;
  @Input() canEdit: boolean;
  @Input() scenarioCase: ScenarioCaseInterface;
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.panelOpenState = false;
    if (!this.scenarioCase) {
      this.scenarioCase = {
        testGiven: '',
        testWhen: '',
        testThen: ''
      };
    }
  }

  senDeleteAction() {
    this.onDelete.emit(this.index);
  }

}
