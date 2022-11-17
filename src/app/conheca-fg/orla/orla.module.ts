import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrlaPageRoutingModule } from './orla-routing.module';

import { OrlaPage } from './orla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrlaPageRoutingModule
  ],
  declarations: [OrlaPage]
})
export class OrlaPageModule {}
