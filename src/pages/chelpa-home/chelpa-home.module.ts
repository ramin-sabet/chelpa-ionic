import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChelpaHomePage } from './chelpa-home';

@NgModule({
  declarations: [
    ChelpaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ChelpaHomePage),
  ],
})
export class ChelpaHomePageModule {}
