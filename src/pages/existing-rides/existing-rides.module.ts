import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExistingRidesPage } from './existing-rides';

@NgModule({
  declarations: [
    ExistingRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExistingRidesPage),
  ],
})
export class ExistingRidesPageModule {}
