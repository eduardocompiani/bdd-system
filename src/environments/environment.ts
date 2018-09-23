// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyB_ND8zz3PHp74S-7g4iV4ljIYIfc_kiYc',
    authDomain: 'bddsystem-dev.firebaseapp.com',
    databaseURL: 'https://bddsystem-dev.firebaseio.com',
    projectId: 'bddsystem-dev',
    storageBucket: 'bddsystem-dev.appspot.com',
    messagingSenderId: '340255395942'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
