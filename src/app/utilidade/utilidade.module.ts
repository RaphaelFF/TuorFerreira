import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilidadePageRoutingModule } from './utilidade-routing.module';

import { UtilidadePage } from './utilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilidadePageRoutingModule
  ],
  declarations: [UtilidadePage]
})
export class UtilidadePageModule {}
