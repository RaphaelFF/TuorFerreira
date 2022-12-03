import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GomesPageRoutingModule } from './gomes-routing.module';

import { GomesPage } from './gomes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GomesPageRoutingModule
  ],
  declarations: [GomesPage]
})
export class GomesPageModule {}
