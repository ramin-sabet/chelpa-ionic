import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewEventPage } from './add-new-event';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    AddNewEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewEventPage),
    AutoCompleteModule
  ],
})
export class AddNewEventPageModule {}
