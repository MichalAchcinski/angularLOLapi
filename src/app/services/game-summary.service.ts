import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { GameSummary } from '../common/game-summary-info/game-summary';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class GameSummaryService {

  private apiKey = GlobalConstants.apiKey;
  private baseUrl = 'https://europe.api.riotgames.com/lol/match/v5/matches';


  constructor(private httpClient: HttpClient) { }

  getGameSummaryInformation(matchId: string): Observable<GameSummary>{

    const gameSummaryUrl = `${this.baseUrl}/${matchId}?api_key=${this.apiKey}`
    const profileIconUrl = "http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/588.png";

    return this.httpClient.get<GameSummary>(gameSummaryUrl).pipe(
      map(response => response)
    );
  }

  getProfileIconUrl(iconId: number): string{
    return `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/${iconId}.png`;
  }
}

