import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { SignUpPage } from '../../Auth/sign-up/sign-up';
import { LoginPage } from '../../Auth/login/login';
import { HowItWorksPage } from '../how-it-works/how-it-works';
import { BannerPage } from '../banner/banner';
import { AngularFirestore } from 'angularfire2/firestore';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  name: string;
  mail: string;
  userType: string;
  helpType: string;
  query: string;

  contactRef = this.db.collection("ContactUs");

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public db: AngularFirestore,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {
    this.menuCtrl.enable(false);
  }

  checkData() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.name) {
      if (this.mail.match(mailformat)) {
        if (this.userType) {
          if (this.helpType) {
            this.sendForm();
          } else { this.presentToast("Select a Query Type") }
        } else { this.presentToast("Select a User Type") }
      } else { this.presentToast("Enter a valid Email") }
    } else { this.presentToast("Enter your name") }


  }


  sendForm() {
    this.contactRef.add({
      Name : this.name,
      Email : this.mail,
      UserType : this.userType,
      HelpType : this.helpType,
       Query  : this.query,
       TimeStamp : moment().format()
    }).then(() => {
      this.name = null;
      this.mail = null;
      this.userType = null;
      this.helpType = null;
      this.query = null;
    }).then(()=>{
      this.presentToast("Format Send")
    })
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  gtBP() { this.navCtrl.setRoot(BannerPage) }
  gtHIW() { this.navCtrl.setRoot(HowItWorksPage) }
  gtCU() { this.navCtrl.setRoot(ContactUsPage) }
  gtLogin() { this.navCtrl.setRoot(LoginPage) }
  gtSignUp() { this.navCtrl.setRoot(SignUpPage) }

}
