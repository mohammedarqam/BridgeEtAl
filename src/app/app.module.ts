import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';
import { HomePage } from '../pages/Supp/home/home';
import { LoginPage } from '../pages/Auth/login/login';
import { SignUpPage } from '../pages/Auth/sign-up/sign-up';
import { DashboardPage } from '../pages/MainPages/dashboard/dashboard';
import { BannerPage } from '../pages/DisplayPages/banner/banner';
import { ContactUsPage } from '../pages/DisplayPages/contact-us/contact-us';
import { HowItWorksPage } from '../pages/DisplayPages/how-it-works/how-it-works';
import { TermsPage } from '../pages/DisplayPages/terms/terms';

export const firebaseCred = {
  apiKey: "AIzaSyBdR8iHLCNUhjaWWj6cvzXWw5laH0pdyl4",
  authDomain: "bridgeetal-ebani.firebaseapp.com",
  databaseURL: "https://bridgeetal-ebani.firebaseio.com",
  projectId: "bridgeetal-ebani",
  storageBucket: "bridgeetal-ebani.appspot.com",
  messagingSenderId: "588176108758"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    DashboardPage,
    BannerPage,
    ContactUsPage,
    HowItWorksPage,
    TermsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFirestoreModule.enablePersistence(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    DashboardPage,
    BannerPage,
    ContactUsPage,
    HowItWorksPage,
    TermsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
