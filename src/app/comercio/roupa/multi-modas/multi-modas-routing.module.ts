import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiModasPage } from './multi-modas.page';

const routes: Routes = [
  {
    path: '',
    component: MultiModasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiModasPageRoutingModule {}
