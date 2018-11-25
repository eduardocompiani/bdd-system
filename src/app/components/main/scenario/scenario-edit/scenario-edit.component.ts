import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScenarioPlanningService} from '../../../../services/scenario-planning.service';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';

@Component({
  selector: 'app-scenario-edit',
  templateUrl: './scenario-edit.component.html',
  styleUrls: ['./scenario-edit.component.css']
})
export class ScenarioEditComponent implements OnInit {

  scenario: ScenarioInterface;

  constructor(private route: ActivatedRoute,
              private scenarioService: ScenarioPlanningService,
              private router: Router) { }

  ngOnInit() {
    this.scenarioService.getByUid(this.route.snapshot.params['id']).subscribe(scenario => {
      this.scenario = scenario as ScenarioInterface;
    });
  }

  saveScenario(scenario: ScenarioInterface) {
    this.scenarioService.update(scenario);
    this.router.navigate(['/scenario']);
  }

}
