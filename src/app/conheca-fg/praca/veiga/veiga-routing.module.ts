import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeigaPage } from './veiga.page';

const routes: Routes = [
  {
    path: '',
    component: VeigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeigaPageRoutingModule {}
