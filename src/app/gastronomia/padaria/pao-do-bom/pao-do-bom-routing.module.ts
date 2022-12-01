import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaoDoBomPage } from './pao-do-bom.page';

const routes: Routes = [
  {
    path: '',
    component: PaoDoBomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaoDoBomPageRoutingModule {}
