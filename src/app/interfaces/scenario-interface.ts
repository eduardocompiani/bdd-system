import {ScenarioCaseInterface} from './scenario-case-interface';

export interface ScenarioInterface {
  oid?: string;
  folder: string;
  description: string;
  cases: [ScenarioCaseInterface];
}
