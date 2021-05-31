import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSummaryInfoComponent } from './game-summary-info.component';

describe('GameSummaryInfoComponent', () => {
  let component: GameSummaryInfoComponent;
  let fixture: ComponentFixture<GameSummaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSummaryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSummaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
