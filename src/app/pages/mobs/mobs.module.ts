import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobsPageRoutingModule } from './mobs-routing.module';

import { MobsPage } from './mobs.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobsPageRoutingModule,
    SharedModule
  ],
  declarations: [MobsPage]
})
export class MobsPageModule {}
