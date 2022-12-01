import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaborDaTerraPage } from './sabor-da-terra.page';

const routes: Routes = [
  {
    path: '',
    component: SaborDaTerraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaborDaTerraPageRoutingModule {}
