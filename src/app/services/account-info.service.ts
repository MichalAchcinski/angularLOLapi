import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AccountInfo } from '../common/game-summary-info/account-info';
import { GlobalConstants } from '../common/global-constants';
import { PlayerByPuuid } from '../common/player-by-puuid';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  private apiKey = GlobalConstants.apiKey;
  private baseUrl = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/cachalot33?api_key='+this.apiKey;

  private baseMatchHistoryGamesUrl = 'https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/';

  constructor(private httpClient: HttpClient) { }

  getAccountInfo(): Observable<AccountInfo> {
    return this.httpClient.get<AccountInfo>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getPlayerMatchHistoryGamesId(accountPuuid: string): Observable<string[]> {

    const specifiedPlayerMatchHistory = this.baseMatchHistoryGamesUrl+accountPuuid+'/ids?start=0&count=20&api_key='+this.apiKey;

    return this.httpClient.get<string[]>(specifiedPlayerMatchHistory).pipe(
      map(response => response)
    );
  }

}
