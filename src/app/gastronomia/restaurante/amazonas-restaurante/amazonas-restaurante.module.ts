import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmazonasRestaurantePageRoutingModule } from './amazonas-restaurante-routing.module';

import { AmazonasRestaurantePage } from './amazonas-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmazonasRestaurantePageRoutingModule
  ],
  declarations: [AmazonasRestaurantePage]
})
export class AmazonasRestaurantePageModule {}
