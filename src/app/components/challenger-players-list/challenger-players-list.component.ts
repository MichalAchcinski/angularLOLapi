import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengerPlayer } from 'src/app/common/challenger-player';
import { ChallengerPlayersService } from 'src/app/services/challenger-players.service';

@Component({
  selector: 'app-challenger-players-list',
  templateUrl: './challenger-players-list.component.html',
  styleUrls: ['./challenger-players-list.component.css']
})
export class ChallengerPlayersListComponent implements OnInit {

  challengerPlayers: ChallengerPlayer[];

  constructor(private challengerPlayersService: ChallengerPlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.challengerPlayersList();
    });
  }

  challengerPlayersList() {
    this.challengerPlayersService.getChallengerPlayers().subscribe(
    data => {
      this.challengerPlayers = data.sort(( a,b) => {
        {let value= b.leaguePoints - a.leaguePoints; return value}
      });
    });
  }

}
