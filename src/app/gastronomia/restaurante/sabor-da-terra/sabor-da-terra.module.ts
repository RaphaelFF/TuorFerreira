import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaborDaTerraPageRoutingModule } from './sabor-da-terra-routing.module';

import { SaborDaTerraPage } from './sabor-da-terra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaborDaTerraPageRoutingModule
  ],
  declarations: [SaborDaTerraPage]
})
export class SaborDaTerraPageModule {}
