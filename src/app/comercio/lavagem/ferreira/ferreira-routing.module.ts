import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FerreiraPage } from './ferreira.page';

const routes: Routes = [
  {
    path: '',
    component: FerreiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FerreiraPageRoutingModule {}
