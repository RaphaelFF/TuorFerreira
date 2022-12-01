import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventistaPage } from './adventista.page';

const routes: Routes = [
  {
    path: '',
    component: AdventistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventistaPageRoutingModule {}
