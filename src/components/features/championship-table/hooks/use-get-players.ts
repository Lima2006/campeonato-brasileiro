import { useQuery } from "@tanstack/react-query";
import getPlayersService from "../services/get-players";

const useGetPlayers = (championshipId: number) => {
  const { data, error, isLoading } = useQuery(["/players"], () =>
    getPlayersService({ championshipId })
  );
  return { data, error, isLoading };
};

export default useGetPlayers;
