import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaFashionPageRoutingModule } from './moda-fashion-routing.module';

import { ModaFashionPage } from './moda-fashion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaFashionPageRoutingModule
  ],
  declarations: [ModaFashionPage]
})
export class ModaFashionPageModule {}
