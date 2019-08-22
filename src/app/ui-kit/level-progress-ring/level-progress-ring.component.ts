import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-level-progress-ring',
  templateUrl: './level-progress-ring.component.html',
  styleUrls: ['./level-progress-ring.component.scss']
})
export class LevelProgressRingComponent implements OnInit {

  @Input() current: number;
  @Input() max: number;
  @Input() color: string;
  @Input() background: string;
  @Input() radius: number;
  @Input() stroke: number;
  @Input() semicircle: boolean;
  @Input() rounded: boolean;
  @Input() clockwise: boolean;
  @Input() responsive: boolean;
  @Input() duration: number;
  @Input() animation: string;
  @Input() animationDelay: number;
  @Output() onRender = new EventEmitter<number>();

  render(event: number) {
    this.onRender.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
