import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionsListComponent } from './potions-list.component';

describe('PotionsListComponent', () => {
  let component: PotionsListComponent;
  let fixture: ComponentFixture<PotionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
