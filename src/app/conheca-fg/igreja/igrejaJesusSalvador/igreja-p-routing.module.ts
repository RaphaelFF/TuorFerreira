import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IgrejaPPage } from './igreja-p.page';

const routes: Routes = [
  {
    path: '',
    component: IgrejaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgrejaPPageRoutingModule {}
