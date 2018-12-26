import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BannerPage } from '../../DisplayPages/banner/banner';
import { HowItWorksPage } from '../../DisplayPages/how-it-works/how-it-works';
import { ContactUsPage } from '../../DisplayPages/contact-us/contact-us';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

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
