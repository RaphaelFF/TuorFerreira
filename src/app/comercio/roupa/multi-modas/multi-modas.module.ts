import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiModasPageRoutingModule } from './multi-modas-routing.module';

import { MultiModasPage } from './multi-modas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiModasPageRoutingModule
  ],
  declarations: [MultiModasPage]
})
export class MultiModasPageModule {}
