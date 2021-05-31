import { TestBed } from '@angular/core/testing';

import { GameSummaryService } from './game-summary.service';

describe('GameSummaryService', () => {
  let service: GameSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
