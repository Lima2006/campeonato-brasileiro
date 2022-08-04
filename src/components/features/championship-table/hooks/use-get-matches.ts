import { useQuery } from "@tanstack/react-query";
import getMatchesService from "../services/get-matches";

const useGetMatches = (championshipId: number) => {
  const { data, error, isLoading } = useQuery(["/matches"], () =>
    getMatchesService({ championshipId })
  );
  return { data, error, isLoading };
};

export default useGetMatches;
