import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaoMiguelPageRoutingModule } from './sao-miguel-routing.module';

import { SaoMiguelPage } from './sao-miguel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaoMiguelPageRoutingModule
  ],
  declarations: [SaoMiguelPage]
})
export class SaoMiguelPageModule {}
