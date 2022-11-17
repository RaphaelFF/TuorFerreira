import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadariaPage } from './padaria.page';

const routes: Routes = [
  {
    path: '',
    component: PadariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadariaPageRoutingModule {}
