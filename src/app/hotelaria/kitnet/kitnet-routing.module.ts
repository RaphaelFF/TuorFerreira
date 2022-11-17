import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitnetPage } from './kitnet.page';

const routes: Routes = [
  {
    path: '',
    component: KitnetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitnetPageRoutingModule {}
