import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlorianoPeixotoPageRoutingModule } from './floriano-peixoto-routing.module';

import { FlorianoPeixotoPage } from './floriano-peixoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlorianoPeixotoPageRoutingModule
  ],
  declarations: [FlorianoPeixotoPage]
})
export class FlorianoPeixotoPageModule {}
