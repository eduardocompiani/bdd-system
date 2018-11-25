import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scenario-list',
  templateUrl: './scenario-list.component.html',
  styleUrls: ['./scenario-list.component.css']
})
export class ScenarioListComponent implements OnInit {

  scenarios: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewScenario() {
    this.router.navigate(['/scenario/create/']);
  }

}
