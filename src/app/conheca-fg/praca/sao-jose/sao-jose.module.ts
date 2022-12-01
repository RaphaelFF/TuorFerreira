import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaoJosePageRoutingModule } from './sao-jose-routing.module';

import { SaoJosePage } from './sao-jose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaoJosePageRoutingModule
  ],
  declarations: [SaoJosePage]
})
export class SaoJosePageModule {}
