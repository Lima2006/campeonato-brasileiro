import { ChampionshipContextDataType } from "./championship-table-context-type";
import { ChampionshipTabsType } from "./championship-tabs-type";

export type State = ChampionshipContextDataType;
export type Action = { type: "setTab"; value: ChampionshipTabsType };
