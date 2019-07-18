import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SpellsListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SpellsModule { }
