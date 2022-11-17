import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PousadaPage } from './pousada.page';

const routes: Routes = [
  {
    path: '',
    component: PousadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PousadaPageRoutingModule {}
