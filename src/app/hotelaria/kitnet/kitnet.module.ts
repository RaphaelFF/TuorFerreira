import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitnetPageRoutingModule } from './kitnet-routing.module';

import { KitnetPage } from './kitnet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitnetPageRoutingModule
  ],
  declarations: [KitnetPage]
})
export class KitnetPageModule {}
