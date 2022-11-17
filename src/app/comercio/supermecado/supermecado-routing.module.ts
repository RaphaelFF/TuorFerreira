import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupermecadoPage } from './supermecado.page';

const routes: Routes = [
  {
    path: '',
    component: SupermecadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupermecadoPageRoutingModule {}
