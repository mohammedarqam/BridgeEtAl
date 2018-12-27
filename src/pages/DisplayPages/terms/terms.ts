import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BannerPage } from '../banner/banner';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { ContactUsPage } from '../contact-us/contact-us';
import { LoginPage } from '../../Auth/login/login';
import { SignUpPage } from '../../Auth/sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams
  ) {
    ; this.menuCtrl.enable(false);
  }





  gtBP() { this.navCtrl.setRoot(BannerPage) }
  gtHIW() { this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() { this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage) }
  gtSignUp() { this.navCtrl.setRoot(SignUpPage) }

}
