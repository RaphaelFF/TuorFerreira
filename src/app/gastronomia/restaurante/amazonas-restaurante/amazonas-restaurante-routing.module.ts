import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonasRestaurantePage } from './amazonas-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: AmazonasRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmazonasRestaurantePageRoutingModule {}
