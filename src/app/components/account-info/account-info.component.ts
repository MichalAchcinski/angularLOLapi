import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AccountInfo } from 'src/app/common/game-summary-info/account-info';
import { AccountInfoService } from 'src/app/services/account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  singleAccountInfo: AccountInfo = new AccountInfo;
  matchHistory: string[];
  singlePuuid: string;


  constructor(private accountInfoService: AccountInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.accountInfo();
      this.matchHistoryGames();
    });

  }

  accountInfo() {

    this.accountInfoService.getAccountInfo().subscribe(
    data => {
      this.singleAccountInfo = data;
    });
  }

  matchHistoryGames() {
    this.accountInfoService.getAccountInfo().subscribe(
      data => {
        this.singlePuuid = data.puuid;
        this.accountInfoService.getPlayerMatchHistoryGamesId(this.singlePuuid).subscribe(
          data => {
            this.matchHistory = data;
          });
      });

  }

}
