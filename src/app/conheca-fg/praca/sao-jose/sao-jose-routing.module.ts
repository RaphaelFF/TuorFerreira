import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaoJosePage } from './sao-jose.page';

const routes: Routes = [
  {
    path: '',
    component: SaoJosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaoJosePageRoutingModule {}
