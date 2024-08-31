import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardBossesComponent } from './card-bosses/card-bosses.component';




@NgModule({
  declarations: [
    HeaderComponent,
    CardsComponent,
    AccordionComponent,
    CardBossesComponent
  ],
  exports: [
    HeaderComponent,
    CardsComponent,
    AccordionComponent,
    CardBossesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
