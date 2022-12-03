import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GomesPage } from './gomes.page';

const routes: Routes = [
  {
    path: '',
    component: GomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GomesPageRoutingModule {}
