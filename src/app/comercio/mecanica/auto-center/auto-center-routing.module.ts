import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoCenterPage } from './auto-center.page';

const routes: Routes = [
  {
    path: '',
    component: AutoCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoCenterPageRoutingModule {}
