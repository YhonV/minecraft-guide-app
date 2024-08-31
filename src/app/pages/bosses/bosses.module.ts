import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BossesPageRoutingModule } from './bosses-routing.module';

import { BossesPage } from './bosses.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossesPageRoutingModule,
    SharedModule
  ],
  declarations: [BossesPage]
})
export class BossesPageModule {}
