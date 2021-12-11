import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  read_Icecreams(){
    return this.firestore.collection('Icecreams').snapshotChanges();
  }

}
