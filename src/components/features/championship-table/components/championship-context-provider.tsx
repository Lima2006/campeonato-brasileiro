import React from "react";
import { ChampionshipContext } from "components/features/championship-table/contexts/championship-context";
import ChampionshipTableReducer, { defaultChampionshipTableReducerValue } from "../reducers/championship-table-reducer";

interface ChampionshipContextProviderProps {
  children?: React.ReactNode;
}
const ChampionshipContextProvider: React.FC<
  ChampionshipContextProviderProps
> = ({ children }) => {
  const [contextData, dispatch] = React.useReducer(ChampionshipTableReducer, defaultChampionshipTableReducerValue);
  return (
    <ChampionshipContext.Provider value={{ contextData, dispatch }}>
      {children}
    </ChampionshipContext.Provider>
  );
};

export default ChampionshipContextProvider;
