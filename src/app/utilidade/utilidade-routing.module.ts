import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilidadePage } from './utilidade.page';

const routes: Routes = [
  {
    path: '',
    component: UtilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilidadePageRoutingModule {}
