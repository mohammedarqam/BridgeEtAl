import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { DashboardPage } from '../pages/MainPages/dashboard/dashboard';
import { BannerPage } from '../pages/DisplayPages/banner/banner';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BannerPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.nav.setRoot(DashboardPage);
        } else {
          this.nav.setRoot(BannerPage);
        }
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  gtBannerPage() {
    this.nav.setRoot(BannerPage);
  }
  singOut() {
    firebase.auth().signOut();
  }
}
