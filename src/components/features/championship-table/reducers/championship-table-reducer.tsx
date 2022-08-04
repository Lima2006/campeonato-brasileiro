import { Action, State } from "../types/championship-table-reducer-type";

export const defaultChampionshipTableReducerValue: State = { tab: "partidas" };

const ChampionshipTableReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setTab":
      return { ...state, tab: action.value };
    default:
      return state;
  }
};

export default ChampionshipTableReducer;
