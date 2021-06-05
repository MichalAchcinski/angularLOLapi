import { GameSummaryBasicInformation } from "./game-summary-basic-information";
import { GameSummaryExtendedInformation } from "./game-summary-extended-information";

export class GameSummary {
    metadata: GameSummaryBasicInformation;
    info: GameSummaryExtendedInformation;
}
