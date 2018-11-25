import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceUtils {

  constructor(private afs: AngularFirestore) {}

  getList(collection: AngularFirestoreCollection<any>) {
    return collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( a => {
          return a.payload.doc.data();
        });
      })
    );
  }


  getByOid(collection: AngularFirestoreCollection<any>, oid: string) {
    return collection.doc(oid).snapshotChanges().pipe(
      map(res => {
        return res.payload.data();
      })
    );
  }

  create(obj, collection: AngularFirestoreCollection<any>) {
    obj.oid = this.afs.createId();
    this.update(obj, collection);
  }

  update(obj, collection: AngularFirestoreCollection<any>) {
    collection.doc(obj.oid).set({...obj});
  }

  delete(obj, collection: AngularFirestoreCollection<any>) {
    collection.doc(obj.oid).delete();
  }
}
