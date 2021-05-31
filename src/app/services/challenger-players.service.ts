import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ChallengerPlayer } from '../common/challenger-player';


@Injectable({
  providedIn: 'root'
})
export class ChallengerPlayersService {

  private apiKey = 'RGAPI-e7e51420-b6fd-4162-8abd-1b3684c9b2e9';
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

