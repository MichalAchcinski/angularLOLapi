import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengerPlayersListComponent } from './components/challenger-players-list/challenger-players-list.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { GameSummaryInfoComponent } from './components/game-summary-info/game-summary-info.component';

const routes: Routes = [
  {path: 'challengerlist', component: ChallengerPlayersListComponent},
  {path: 'accountinfo', component: AccountInfoComponent},
  {path: 'matchid/:matchid', component: GameSummaryInfoComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChallengerPlayersListComponent,
    AccountInfoComponent,
    GameSummaryInfoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
