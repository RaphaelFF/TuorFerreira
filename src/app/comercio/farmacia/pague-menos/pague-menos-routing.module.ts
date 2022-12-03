import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagueMenosPage } from './pague-menos.page';

const routes: Routes = [
  {
    path: '',
    component: PagueMenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagueMenosPageRoutingModule {}
