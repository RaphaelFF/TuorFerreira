import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelMaisPageRoutingModule } from './hotel-mais-routing.module';

import { HotelMaisPage } from './hotel-mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelMaisPageRoutingModule
  ],
  declarations: [HotelMaisPage]
})
export class HotelMaisPageModule {}
