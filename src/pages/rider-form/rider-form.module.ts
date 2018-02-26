import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderFormPage } from './rider-form';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    RiderFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderFormPage),
    AutoCompleteModule
  ],
})
export class RiderFormPageModule {}
