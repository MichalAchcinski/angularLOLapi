import { BansFromGameSummary } from "./bans-from-game-summary";
import { ObjectivesFromGameSummary } from "./objectives-from-game-summary";

export class TeamsFromGameSummary {
    bans: BansFromGameSummary[];
    objectives: ObjectivesFromGameSummary;
    teamId: number;
    win: boolean;
}
