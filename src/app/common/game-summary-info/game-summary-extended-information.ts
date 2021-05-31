import { ParticipantFromGameSummary } from "./participant-from-game-summary";
import { TeamsFromGameSummary } from "./teams-from-game-summary";

export class GameSummaryExtendedInformation {
    gameCreation: number;
    gameDuration: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: ParticipantFromGameSummary[];
    platformId: string;
    queueId: number;
    teams: TeamsFromGameSummary[];
}
