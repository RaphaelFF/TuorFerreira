import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KemiaSilvaPage } from './kemia-silva.page';

const routes: Routes = [
  {
    path: '',
    component: KemiaSilvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KemiaSilvaPageRoutingModule {}
