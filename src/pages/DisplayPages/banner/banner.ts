import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginPage } from '../../Auth/login/login';
import { SignUpPage } from '../../Auth/sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-banner',
  templateUrl: 'banner.html',
})
export class BannerPage {

  mail: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFirestore,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(false);
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
