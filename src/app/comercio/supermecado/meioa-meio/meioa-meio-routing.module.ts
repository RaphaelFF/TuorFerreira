import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeioaMeioPage } from './meioa-meio.page';

const routes: Routes = [
  {
    path: '',
    component: MeioaMeioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeioaMeioPageRoutingModule {}
