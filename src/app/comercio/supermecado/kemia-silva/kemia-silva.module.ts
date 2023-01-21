import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KemiaSilvaPageRoutingModule } from './kemia-silva-routing.module';

import { KemiaSilvaPage } from './kemia-silva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KemiaSilvaPageRoutingModule
  ],
  declarations: [KemiaSilvaPage]
})
export class KemiaSilvaPageModule {}
