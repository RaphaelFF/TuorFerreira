import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaoDomingosPageRoutingModule } from './sao-domingos-routing.module';

import { SaoDomingosPage } from './sao-domingos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaoDomingosPageRoutingModule
  ],
  declarations: [SaoDomingosPage]
})
export class SaoDomingosPageModule {}
