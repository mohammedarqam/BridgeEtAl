import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BannerPage } from './banner';

@NgModule({
  declarations: [
    BannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BannerPage),
  ],
})
export class BannerPageModule {}
