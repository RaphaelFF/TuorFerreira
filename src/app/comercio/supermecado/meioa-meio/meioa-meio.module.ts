import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeioaMeioPageRoutingModule } from './meioa-meio-routing.module';

import { MeioaMeioPage } from './meioa-meio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeioaMeioPageRoutingModule
  ],
  declarations: [MeioaMeioPage]
})
export class MeioaMeioPageModule {}
