import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ChallengerPlayer } from '../common/challenger-player';
import { GlobalConstants } from '../common/global-constants';


@Injectable({
  providedIn: 'root'
})
export class ChallengerPlayersService {

  private apiKey = GlobalConstants.apiKey;
  private baseUrl = 'https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key='+this.apiKey;

  constructor(private httpClient: HttpClient) { }

  getChallengerPlayers(): Observable<ChallengerPlayer[]> {
    return this.httpClient.get<GetResponeChallengerPlayers>(this.baseUrl).pipe(
      map(response => response.entries)
    );
  }

}

interface GetResponeChallengerPlayers {
    entries: ChallengerPlayer[];
}

