import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelProgressRingComponent } from './level-progress-ring.component';

describe('LevelProgressRingComponent', () => {
  let component: LevelProgressRingComponent;
  let fixture: ComponentFixture<LevelProgressRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelProgressRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelProgressRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
