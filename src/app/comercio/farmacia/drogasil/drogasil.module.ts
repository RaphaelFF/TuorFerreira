import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrogasilPageRoutingModule } from './drogasil-routing.module';

import { DrogasilPage } from './drogasil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrogasilPageRoutingModule
  ],
  declarations: [DrogasilPage]
})
export class DrogasilPageModule {}
