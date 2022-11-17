import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadariaPageRoutingModule } from './padaria-routing.module';

import { PadariaPage } from './padaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadariaPageRoutingModule
  ],
  declarations: [PadariaPage]
})
export class PadariaPageModule {}
