import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RioMarPage } from './rio-mar.page';

const routes: Routes = [
  {
    path: '',
    component: RioMarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RioMarPageRoutingModule {}
