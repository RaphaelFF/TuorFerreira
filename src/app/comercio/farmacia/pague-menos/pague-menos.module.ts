import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagueMenosPageRoutingModule } from './pague-menos-routing.module';

import { PagueMenosPage } from './pague-menos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagueMenosPageRoutingModule
  ],
  declarations: [PagueMenosPage]
})
export class PagueMenosPageModule {}
