import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioFmPage } from './radio-fm.page';

const routes: Routes = [
  {
    path: '',
    component: RadioFmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioFmPageRoutingModule {}
