import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaoDomingosPage } from './sao-domingos.page';

const routes: Routes = [
  {
    path: '',
    component: SaoDomingosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaoDomingosPageRoutingModule {}
