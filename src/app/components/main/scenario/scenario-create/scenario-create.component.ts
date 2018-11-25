import { Component, OnInit } from '@angular/core';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';
import {ScenarioPlanningService} from '../../../../services/scenario-planning.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scenario-create',
  templateUrl: './scenario-create.component.html',
  styleUrls: ['./scenario-create.component.css']
})
export class ScenarioCreateComponent implements OnInit {

  constructor(private scenarioPlanningService: ScenarioPlanningService,
              private router: Router) {

  }

  ngOnInit() {
  }

  createScenario(scenario: ScenarioInterface) {
    this.scenarioPlanningService.create(scenario);
    this.router.navigate(['/scenario']);
  }

}
