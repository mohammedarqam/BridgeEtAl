import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import { LoginPage } from '../../Auth/login/login';
import { ContactUsPage } from '../contact-us/contact-us';
import { BannerPage } from '../banner/banner';

@IonicPage()
@Component({
  selector: 'page-how-it-works',
  templateUrl: 'how-it-works.html',
})
export class HowItWorksPage {

  accnts = "Experts";

  constructor(
  public navCtrl: NavController, 
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(false);
  }






















  gtBP(){this.navCtrl.setRoot(BannerPage)}
  gtHIW() {this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() {this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage)}
  gtSignUp() { this.navCtrl.setRoot(SignUpPage)}

}
