import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginPage } from '../../Auth/login/login';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import { DashboardPage } from '../../MainPages/dashboard/dashboard';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-banner',
  templateUrl: 'banner.html',
})
export class BannerPage {

  mail: string;

  userIn : boolean ;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFirestore,
    public platform : Platform,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad(){
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     console.log(user.uid);
    //     this.userIn = true;
    //   } else {
    //     console.log("No User")
    //     this.userIn = false;
    //   }
    // });

  }


  subscribe() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.mail.match(mailformat)) {

      this.db.collection("Subscriptions").add({
        Email: this.mail
      }).then(() => {
        this.presentToast("Subscibed");
        this.mail = null;
      })

    } else {
      this.presentToast("Enter a valid Email");
    }
  }


  gtDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  } 

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  gtBP(){this.navCtrl.setRoot(BannerPage)}
  gtHIW() {this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() {this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage)}
  gtSignUp() { this.navCtrl.setRoot(SignUpPage)}
}
