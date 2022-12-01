import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlorianoPeixotoPage } from './floriano-peixoto.page';

const routes: Routes = [
  {
    path: '',
    component: FlorianoPeixotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlorianoPeixotoPageRoutingModule {}
