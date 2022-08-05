import { api } from "core/lib/api";
import { ChartType } from "../types/chart-type";

type Params = { championshipId: number };
type Response = ChartType[];
type ServiceType = (params: Params) => Promise<Response>;

const getChartService: ServiceType = async ({ championshipId }) => {
  try {
    const response = await api.get<Response>(
      `campeonatos/${championshipId}/tabela`
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Get chart service: ", error);
  }
};

export default getChartService;
