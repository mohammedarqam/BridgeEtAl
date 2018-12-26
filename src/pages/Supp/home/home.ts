import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mainArr : Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public db: AngularFirestore,
  ) {
    this.getData();
  }
  colRef = this.db.collection("users", ref => ref.where('first','==','Arqam') );
  
  getData(){
    this.colRef.snapshotChanges().subscribe((querySnapshot) => {
      this.mainArr = [];
      querySnapshot.forEach((doc) => {
        var temp : any = doc.payload.doc.data();
        temp.id = doc.payload.doc.id;
        this.mainArr.push(temp);
      });
  });
  
  }
  doSumthing() {

    
    this.db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

  }
}
