import { Component, OnInit } from '@angular/core';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.component.html',
  styleUrls: ['./scenario-create.component.css']
})
export class ScenarioCreateComponent implements OnInit {

  ngOnInit() {
  }

  createScenario(scenario: ScenarioInterface) {
    console.log(scenario);
  }

}
