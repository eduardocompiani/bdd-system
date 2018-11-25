import { Injectable } from '@angular/core';
import {ScenarioInterface} from '../interfaces/scenario-interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ServiceUtils} from '../utils/service-utils';
import {FolderInterface} from '../interfaces/folder-interface';

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

  create(folder: FolderInterface) {
    this.serviceUtils.create(folder, this.scenarioCollection);
  }

  update(folder: FolderInterface) {
    this.serviceUtils.update(folder, this.scenarioCollection);
  }

  delete(folder: FolderInterface) {
    this.serviceUtils.delete(folder, this.scenarioCollection);
  }
}
