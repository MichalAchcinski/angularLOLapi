import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { GameSummaryBasicInformation } from '../common/game-summary-info/game-summary-basic-information';
import { GameSummaryExtendedInformation } from '../common/game-summary-info/game-summary-extended-information';

@Injectable({
  providedIn: 'root'
})
export class GameSummaryService {

  private apiKey = 'RGAPI-e7e51420-b6fd-4162-8abd-1b3684c9b2e9';
  private baseUrl = 'https://europe.api.riotgames.com/lol/match/v5/matches';

  constructor(private httpClient: HttpClient) { }

  getGameSummaryBasicInformation(matchId: string): Observable<GameSummaryBasicInformation>{

    const gameSummaryUrl = `${this.baseUrl}/${matchId}?api_key=${this.apiKey}`

    return this.httpClient.get<GetResponeGameSummaryBasicInfo>(gameSummaryUrl).pipe(
      map(response => response.metadata)
    );
  }
}

interface GetResponeGameSummaryBasicInfo{
  metadata: GameSummaryBasicInformation;
}