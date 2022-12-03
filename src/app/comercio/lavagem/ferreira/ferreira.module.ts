import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FerreiraPageRoutingModule } from './ferreira-routing.module';

import { FerreiraPage } from './ferreira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FerreiraPageRoutingModule
  ],
  declarations: [FerreiraPage]
})
export class FerreiraPageModule {}
