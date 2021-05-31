import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerPlayersListComponent } from './challenger-players-list.component';

describe('ChallengerPlayersListComponent', () => {
  let component: ChallengerPlayersListComponent;
  let fixture: ComponentFixture<ChallengerPlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengerPlayersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerPlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
