import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeightPage } from './weight';

@NgModule({
  declarations: [
    WeightPage,
  ],
  imports: [
    IonicPageModule.forChild(WeightPage),
  ],
  exports: [
    WeightPage
  ]
})
export class WeightModule {}
