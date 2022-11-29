import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioFmPageRoutingModule } from './radio-fm-routing.module';

import { RadioFmPage } from './radio-fm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioFmPageRoutingModule
  ],
  declarations: [RadioFmPage]
})
export class RadioFmPageModule {}
