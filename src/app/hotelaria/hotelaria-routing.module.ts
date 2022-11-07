import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelariaPage } from './hotelaria.page';

const routes: Routes = [
  {
    path: '',
    component: HotelariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelariaPageRoutingModule {}
