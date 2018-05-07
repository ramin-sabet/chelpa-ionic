import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneConfirmationPage } from './phone-confirmation';

@NgModule({
  declarations: [
    PhoneConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneConfirmationPage),
  ],
})
export class PhoneConfirmationPageModule {}
