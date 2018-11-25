import { Injectable } from '@angular/core';
import {ScenarioInterface} from '../interfaces/scenario-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ServiceUtils} from '../utils/service-utils';

@Injectable({
  providedIn: 'root'
})
export class ScenarioPlanningService {

  scenarioCollection: AngularFirestoreCollection<ScenarioInterface>;

  constructor(private afs: AngularFirestore,
              private serviceUtils: ServiceUtils) {
    this.scenarioCollection = this.afs.collection('scenarioPlanning');
  }

  getList() {
    return this.serviceUtils.getList(this.scenarioCollection);
  }

  getByUid(oid: string) {
    return this.serviceUtils.getByOid(this.scenarioCollection, oid);
  }

  create(scenario: ScenarioInterface) {
    this.serviceUtils.create(scenario, this.scenarioCollection);
  }

  update(scenario: ScenarioInterface) {
    this.serviceUtils.update(scenario, this.scenarioCollection);
  }

  delete(scenario: ScenarioInterface) {
    this.serviceUtils.delete(scenario, this.scenarioCollection);
  }
}
