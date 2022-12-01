import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaresiaPageRoutingModule } from './maresia-routing.module';

import { MaresiaPage } from './maresia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaresiaPageRoutingModule
  ],
  declarations: [MaresiaPage]
})
export class MaresiaPageModule {}
