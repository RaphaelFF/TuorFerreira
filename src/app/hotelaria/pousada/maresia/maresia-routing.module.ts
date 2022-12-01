import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaresiaPage } from './maresia.page';

const routes: Routes = [
  {
    path: '',
    component: MaresiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaresiaPageRoutingModule {}
