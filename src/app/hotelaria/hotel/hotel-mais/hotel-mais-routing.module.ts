import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelMaisPage } from './hotel-mais.page';

const routes: Routes = [
  {
    path: '',
    component: HotelMaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelMaisPageRoutingModule {}
