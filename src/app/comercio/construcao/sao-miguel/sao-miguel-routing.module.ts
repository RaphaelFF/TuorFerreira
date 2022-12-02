import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaoMiguelPage } from './sao-miguel.page';

const routes: Routes = [
  {
    path: '',
    component: SaoMiguelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaoMiguelPageRoutingModule {}
