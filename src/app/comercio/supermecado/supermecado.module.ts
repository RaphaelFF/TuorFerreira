import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupermecadoPageRoutingModule } from './supermecado-routing.module';

import { SupermecadoPage } from './supermecado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupermecadoPageRoutingModule
  ],
  declarations: [SupermecadoPage]
})
export class SupermecadoPageModule {}
