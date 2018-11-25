import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ScenarioPlanningService} from '../../../../services/scenario-planning.service';
import {ScenarioInterface} from '../../../../interfaces/scenario-interface';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  scenarios: any;
  name = 'description';
  canManage;

  constructor(private router: Router,
              private scenarioPlanningService: ScenarioPlanningService,
              private authService: AuthService) {}

  ngOnInit() {
    this.scenarios = this.scenarioPlanningService.getList();
    this.canManage = this.authService.loggedUser;
  }

  createNewScenario() {
    this.router.navigate(['/team/create/']);
  }

  edit(scenario: ScenarioInterface) {
    this.router.navigate(['/scenario/edit/' + scenario.oid]);
  }

  view(scenario: ScenarioInterface) {
    this.router.navigate(['/scenario/view/' + scenario.oid]);
  }

  delete(scenario: ScenarioInterface) {
    this.scenarioPlanningService.delete(scenario);
  }

}
