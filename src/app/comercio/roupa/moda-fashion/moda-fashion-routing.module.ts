import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaFashionPage } from './moda-fashion.page';

const routes: Routes = [
  {
    path: '',
    component: ModaFashionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaFashionPageRoutingModule {}
