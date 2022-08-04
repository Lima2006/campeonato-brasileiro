import React from "react";
import { ChampionshipTableContextType } from "../types/championship-table-context-type";

const initialState: ChampionshipTableContextType = {
  contextData: { tab: "partidas" },
  dispatch: () => null,
};

export const ChampionshipContext = React.createContext(initialState);
