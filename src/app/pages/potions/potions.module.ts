import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotionsPageRoutingModule } from './potions-routing.module';

import { PotionsPage } from './potions.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotionsPageRoutingModule,
    SharedModule
  ],
  declarations: [PotionsPage]
})
export class PotionsPageModule {}
