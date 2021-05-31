import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameSummaryBasicInformation } from 'src/app/common/game-summary-info/game-summary-basic-information';
import { GameSummaryService } from 'src/app/services/game-summary.service';

@Component({
  selector: 'app-game-summary-info',
  templateUrl: './game-summary-info.component.html',
  styleUrls: ['./game-summary-info.component.css']
})
export class GameSummaryInfoComponent implements OnInit {

  singleGameSummaryBasicInfo: GameSummaryBasicInformation = new GameSummaryBasicInformation;

  constructor(private gameSummaryService: GameSummaryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.gameSummaryBasicInfo();
    });
  }

  gameSummaryBasicInfo(){
    const matchId: string = this.route.snapshot.paramMap.get('matchid');

    this.gameSummaryService.getGameSummaryBasicInformation(matchId).subscribe(
      data => {
        this.singleGameSummaryBasicInfo = data;
      });
  }

}
