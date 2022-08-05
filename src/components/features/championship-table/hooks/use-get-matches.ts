import { useQuery } from "@tanstack/react-query";
import getMatchesService from "../services/get-matches";
import { RawMatchesType } from "../types/match-type";

const useGetMatches = (championshipId: number) => {
  const { data, error, isLoading } = useQuery<RawMatchesType>(
    ["/matches", championshipId],
    () => getMatchesService({ championshipId })
  );
  return { data, error, isLoading };
};

export default useGetMatches;
