import { useContext } from "react";
import { ChampionshipContext } from "../contexts/championship-context";

const useChampionshipContext = () => {
  const championshipContext = useContext(ChampionshipContext);
  if (championshipContext === undefined)
    throw new Error("useChampionshipContext was used outside of its Provider");
  return championshipContext;
};

export default useChampionshipContext;
