import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrogasilPage } from './drogasil.page';

const routes: Routes = [
  {
    path: '',
    component: DrogasilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrogasilPageRoutingModule {}
