import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChelpaHomePage } from './chelpa-home';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    ChelpaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ChelpaHomePage),
    AutoCompleteModule
  ],
})
export class ChelpaHomePageModule {}
