import { Baron } from "./objectives/baron";
import { Champion } from "./objectives/champion";
import { Dragon } from "./objectives/dragon";
import { Inhibitor } from "./objectives/inhibitor";
import { RiftHerald } from "./objectives/rift-herald";
import { Tower } from "./objectives/tower";

export class ObjectivesFromGameSummary {
    baron: Baron;
    champion: Champion;
    dragon: Dragon;
    inhibitor: Inhibitor;
    riftHerald: RiftHerald;
    tower: Tower;
}
