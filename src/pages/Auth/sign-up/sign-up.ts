import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, Thumbnail, LoadingController } from 'ionic-angular';
import { BannerPage } from '../../DisplayPages/banner/banner';
import { HowItWorksPage } from '../../DisplayPages/how-it-works/how-it-works';
import { ContactUsPage } from '../../DisplayPages/contact-us/contact-us';
import { LoginPage } from '../login/login';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import moment from 'moment';
import { DashboardPage } from '../../MainPages/dashboard/dashboard';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  first: string;
  last: string;
  mail: string;
  pass: string;
  passC: string;
  userType: string;
  terms: boolean;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public db: AngularFirestore,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {
    this.menuCtrl.enable(false);
  }


  checkData() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.db.collection(`UserType/${this.userType}`).doc("res.id").set(true);

    if (this.first) {
      if (this.last) {
        if (this.mail.match(mailformat)) {
          if (this.pass) {
            if (this.passC) {
              if (this.pass == this.passC) {
                if (this.userType) {
                  if (this.terms) {
                    this.signUp();
                  } else { this.presentToast("Accept Terms and Conditions"); }
                } else { this.presentToast("Select a User Type") }
              } else { this.presentToast("Passwords do not Match") }
            } else { this.presentToast("Re-Enter Password"); }
          } else { this.presentToast("Enter a password"); }
        } else { this.presentToast("Email not Valid") }
      } else { this.presentToast("Enter your last Name") }
    } else { this.presentToast("Enter First Name") }

  }


  signUp() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    loading.present();

    firebase.auth().createUserWithEmailAndPassword(this.mail, this.pass).then(() => {
      this.db.collection("Users").add({
        First: this.first,
        Last: this.last,
        Email: this.mail,
        Pass: this.pass,
        UserType: this.userType,
        Verified: false,
        TimeStamp: moment().format(),
      }).then((res) => {
          this.navCtrl.setRoot(DashboardPage);
          loading.dismiss();
          this.presentToast("Navigating to Dashboard");
      })
    })
  }



  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  gtBP() { this.navCtrl.setRoot(BannerPage) }
  gtHIW() { this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() { this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage) }
  gtSignUp() { this.navCtrl.setRoot(SignUpPage) }

}
