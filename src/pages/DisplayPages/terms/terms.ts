import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BannerPage } from '../banner/banner';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginPage } from '../../Auth/login/login';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  userIn : boolean ;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams
  ) {
    this.menuCtrl.enable(false);
  }
  ionViewDidLoad(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
        this.userIn = true;
      } else {
        console.log("No User")
        this.userIn = false;
      }
    });

  }





  gtBP() { this.navCtrl.setRoot(BannerPage) }
  gtHIW() { this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() { this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage) }
  gtSignUp() { this.navCtrl.setRoot(SignUpPage) }

}
