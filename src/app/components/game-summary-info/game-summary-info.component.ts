import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameSummary } from 'src/app/common/game-summary-info/game-summary';
import { GlobalConstants } from 'src/app/common/global-constants';
import { GameSummaryService } from 'src/app/services/game-summary.service';

@Component({
  selector: 'app-game-summary-info',
  templateUrl: './game-summary-info.component.html',
  styleUrls: ['./game-summary-info.component.css'],
})
export class GameSummaryInfoComponent implements OnInit {

  singleGameSummaryInfo: GameSummary = new GameSummary;
  iconIdsUrl: string[] = [];
  gameVersion: string = GlobalConstants.gameVersion;

  constructor(
    private gameSummaryService: GameSummaryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.gameSummaryInfo();
    });
  }

  gameSummaryInfo() {
    const matchId: string = this.route.snapshot.paramMap.get('matchid');

    this.gameSummaryService
    .getGameSummaryInformation(matchId)
    .subscribe((data) => {
      this.singleGameSummaryInfo = data;
    });
  }
}

// for(let i = 0; i<this.singleGameSummaryInfo.metadata.participants.length; i++){
//   this.gameSummaryService
//     .getPlayersByPuuid(this.singleGameSummaryInfo.metadata.participants[i])
//     .subscribe((data) => {
//       this.participantsByPuuid.push(data);
//       console.log(data);
//     });
//   }
// LINE 36+