import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import { LoginPage } from '../../Auth/login/login';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { BannerPage } from '../banner/banner';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(
  public navCtrl: NavController, 
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }
  gtBP(){this.navCtrl.setRoot(BannerPage)}
  gtHIW() {this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() {this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage)}
  gtSignUp() { this.navCtrl.setRoot(SignUpPage)}

}
