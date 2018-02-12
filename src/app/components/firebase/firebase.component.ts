import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  private empCollection: AngularFirestoreCollection<any>;
  employees$ : Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.empCollection = this.afs.collection<any>('employees');
    this.employees$ = this.empCollection.valueChanges();
    this.employees$ = this.empCollection.snapshotChanges().map(
      (actions) => {
        return actions.map(
          emp => {
            //console.log(emp); // To get the key, i.e. "id" here
              const key = emp.payload.doc.id;
              const data = emp.payload.doc.data();
              return {key, ...data };
          }
        );
      }
    );
  }

  addData(){
    //this.empCollection.doc(key).update(data);
    this.empCollection.add({id: 103, name: 'john', email: 'john@mail.com'});
  }
}
