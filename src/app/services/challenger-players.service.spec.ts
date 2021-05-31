import { TestBed } from '@angular/core/testing';

import { ChallengerPlayersService } from './challenger-players.service';

describe('ChallengerPlayersService', () => {
  let service: ChallengerPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengerPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
