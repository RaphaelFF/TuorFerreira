import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PousadaPageRoutingModule } from './pousada-routing.module';

import { PousadaPage } from './pousada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PousadaPageRoutingModule
  ],
  declarations: [PousadaPage]
})
export class PousadaPageModule {}
