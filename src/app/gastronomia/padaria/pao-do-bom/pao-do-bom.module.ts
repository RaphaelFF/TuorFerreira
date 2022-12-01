import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaoDoBomPageRoutingModule } from './pao-do-bom-routing.module';

import { PaoDoBomPage } from './pao-do-bom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaoDoBomPageRoutingModule
  ],
  declarations: [PaoDoBomPage]
})
export class PaoDoBomPageModule {}
