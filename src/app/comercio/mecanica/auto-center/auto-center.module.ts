import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoCenterPageRoutingModule } from './auto-center-routing.module';

import { AutoCenterPage } from './auto-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCenterPageRoutingModule
  ],
  declarations: [AutoCenterPage]
})
export class AutoCenterPageModule {}
