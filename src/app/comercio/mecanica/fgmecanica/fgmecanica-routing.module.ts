import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FGMecanicaPage } from './fgmecanica.page';

const routes: Routes = [
  {
    path: '',
    component: FGMecanicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FGMecanicaPageRoutingModule {}
