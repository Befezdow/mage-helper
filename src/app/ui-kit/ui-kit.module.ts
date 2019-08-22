import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { LevelProgressRingComponent } from './level-progress-ring/level-progress-ring.component';



@NgModule({
  declarations: [
    LevelProgressRingComponent
  ],
  imports: [
    CommonModule,
    RoundProgressModule
  ],
  exports: [
    LevelProgressRingComponent
  ]
})
export class UiKitModule { }
