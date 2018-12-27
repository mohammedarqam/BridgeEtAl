import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import { LoginPage } from '../../Auth/login/login';
import { ContactUsPage } from '../contact-us/contact-us';
import { BannerPage } from '../banner/banner';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-how-it-works',
  templateUrl: 'how-it-works.html',
})
export class HowItWorksPage {

  userIn : boolean =false;

  accnts = "Experts";

  constructor(
  public navCtrl: NavController, 
  public menuCtrl : MenuController,
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





















  gtBP(){this.navCtrl.setRoot(BannerPage)}
  gtHIW() {this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() {this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage)}
  gtSignUp() { this.navCtrl.setRoot(SignUpPage)}

}
