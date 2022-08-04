import { api } from "core/lib/api";

type Params = { championshipId: number };
type Response = any;
type ServiceType = (params: Params) => Promise<Response>;

const getMatchesService: ServiceType = async ({ championshipId }) => {
  try {
    const response = await api.get(`campeonatos/${championshipId}/partidas`);
    return response.data;
  } catch (error: any) {
    throw new Error("Get matches service: ", error);
  }
};

export default getMatchesService;
