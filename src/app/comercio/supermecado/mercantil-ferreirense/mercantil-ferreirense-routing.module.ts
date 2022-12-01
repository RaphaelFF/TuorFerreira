import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercantilFerreirensePage } from './mercantil-ferreirense.page';

const routes: Routes = [
  {
    path: '',
    component: MercantilFerreirensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercantilFerreirensePageRoutingModule {}
