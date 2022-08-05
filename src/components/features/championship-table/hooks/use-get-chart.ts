import { useQuery } from "@tanstack/react-query";
import getChartService from "../services/get-chart";
import { ChartType } from "../types/chart-type";

const useGetChart = (championshipId: number) => {
  const { data, error, isLoading } = useQuery<ChartType[]>(
    ["/chart", championshipId],
    () => getChartService({ championshipId })
  );
  return { data, error, isLoading };
};

export default useGetChart;
