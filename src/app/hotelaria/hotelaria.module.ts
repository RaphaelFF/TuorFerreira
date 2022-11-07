import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelariaPageRoutingModule } from './hotelaria-routing.module';

import { HotelariaPage } from './hotelaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelariaPageRoutingModule
  ],
  declarations: [HotelariaPage]
})
export class HotelariaPageModule {}
