import { Dispatch } from "react"
import { Action } from "./championship-table-reducer-type"
import { ChampionshipTabsType } from "./championship-tabs-type"

export type ChampionshipContextDataType = { tab: ChampionshipTabsType}

export type ChampionshipTableContextType = {
  contextData: ChampionshipContextDataType
  dispatch: Dispatch<Action>
}