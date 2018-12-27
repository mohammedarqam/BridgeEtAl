import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/MainPages/dashboard/dashboard';
import { BannerPage } from '../pages/DisplayPages/banner/banner';
import { HowItWorksPage } from '../pages/DisplayPages/how-it-works/how-it-works';
import { ContactUsPage } from '../pages/DisplayPages/contact-us/contact-us';
import { LoginPage } from '../pages/Auth/login/login';
import { SignUpPage } from '../pages/Auth/sign-up/sign-up';
import { TermsPage } from '../pages/DisplayPages/terms/terms';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TermsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  gtBannerPage(){
    this.nav.setRoot(BannerPage);
  }
}
