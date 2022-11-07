import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConhecaFGPageRoutingModule } from './conheca-fg-routing.module';

import { ConhecaFGPage } from './conheca-fg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConhecaFGPageRoutingModule
  ],
  declarations: [ConhecaFGPage]
})
export class ConhecaFGPageModule {}
