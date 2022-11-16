import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IgrejaPPageRoutingModule } from './igreja-p-routing.module';

import { IgrejaPPage } from './igreja-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IgrejaPPageRoutingModule
  ],
  declarations: [IgrejaPPage]
})
export class IgrejaPPageModule {}
