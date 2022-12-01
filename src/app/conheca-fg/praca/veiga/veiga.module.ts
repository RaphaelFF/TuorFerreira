import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeigaPageRoutingModule } from './veiga-routing.module';

import { VeigaPage } from './veiga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeigaPageRoutingModule
  ],
  declarations: [VeigaPage]
})
export class VeigaPageModule {}
