import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsListComponent } from './spells-list/spells-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SpellsListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SpellsModule { }
