import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotionsListComponent } from './potions-list/potions-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PotionsListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class PotionsModule { }
