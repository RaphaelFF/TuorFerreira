import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercantilFerreirensePageRoutingModule } from './mercantil-ferreirense-routing.module';

import { MercantilFerreirensePage } from './mercantil-ferreirense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercantilFerreirensePageRoutingModule
  ],
  declarations: [MercantilFerreirensePage]
})
export class MercantilFerreirensePageModule {}
