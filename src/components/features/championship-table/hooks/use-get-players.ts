import { useQuery } from "@tanstack/react-query";
import getPlayersService from "../services/get-players";
import { PlayerType } from "../types/player-type";

const useGetPlayers = (championshipId: number) => {
  const { data, error, isLoading } = useQuery<PlayerType[]>(["/players"], () =>
    getPlayersService({ championshipId })
  );
  return { data, error, isLoading };
};

export default useGetPlayers;
