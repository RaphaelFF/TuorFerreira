import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrlaPage } from './orla.page';

const routes: Routes = [
  {
    path: '',
    component: OrlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrlaPageRoutingModule {}
