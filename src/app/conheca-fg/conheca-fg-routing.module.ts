import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConhecaFGPage } from './conheca-fg.page';

const routes: Routes = [
  {
    path: '',
    component: ConhecaFGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConhecaFGPageRoutingModule {}
