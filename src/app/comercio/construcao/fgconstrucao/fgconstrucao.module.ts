import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FGConstrucaoPageRoutingModule } from './fgconstrucao-routing.module';

import { FGConstrucaoPage } from './fgconstrucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FGConstrucaoPageRoutingModule
  ],
  declarations: [FGConstrucaoPage]
})
export class FGConstrucaoPageModule {}
