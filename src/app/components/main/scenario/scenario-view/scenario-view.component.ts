import { Component, OnInit } from '@angular/core';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';
import {ActivatedRoute} from '@angular/router';
import {ScenarioPlanningService} from '../../../../services/scenario-planning.service';

@Component({
  selector: 'app-scenario-view',
  templateUrl: './scenario-view.component.html',
  styleUrls: ['./scenario-view.component.css']
})
export class ScenarioViewComponent implements OnInit {

  scenario: ScenarioInterface;

  constructor(private route: ActivatedRoute,
              private scenarioService: ScenarioPlanningService) { }

  ngOnInit() {
    this.scenarioService.getByUid(this.route.snapshot.params['id']).subscribe(scenario => {
      this.scenario = scenario as ScenarioInterface;
    });
  }

}
