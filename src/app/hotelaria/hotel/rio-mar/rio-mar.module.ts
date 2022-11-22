import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RioMarPageRoutingModule } from './rio-mar-routing.module';

import { RioMarPage } from './rio-mar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RioMarPageRoutingModule
  ],
  declarations: [RioMarPage]
})
export class RioMarPageModule {}
