import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FGMecanicaPageRoutingModule } from './fgmecanica-routing.module';

import { FGMecanicaPage } from './fgmecanica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FGMecanicaPageRoutingModule
  ],
  declarations: [FGMecanicaPage]
})
export class FGMecanicaPageModule {}
