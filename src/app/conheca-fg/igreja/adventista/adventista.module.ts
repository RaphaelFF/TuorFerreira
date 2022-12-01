import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventistaPageRoutingModule } from './adventista-routing.module';

import { AdventistaPage } from './adventista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventistaPageRoutingModule
  ],
  declarations: [AdventistaPage]
})
export class AdventistaPageModule {}
