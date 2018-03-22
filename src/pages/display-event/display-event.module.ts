import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayEventPage } from './display-event';

@NgModule({
  declarations: [
    DisplayEventPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayEventPage),
  ],
})
export class DisplayEventPageModule {}
