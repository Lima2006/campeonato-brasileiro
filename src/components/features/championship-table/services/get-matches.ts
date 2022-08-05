import { api } from "core/lib/api";
import { RawMatchesType } from "../types/match-type";

type Params = { championshipId: number };
type Response = RawMatchesType;
type ServiceType = (params: Params) => Promise<Response>;

const getMatchesService: ServiceType = async ({ championshipId }) => {
  try {
    const response = await api.get<RawMatchesType>(
      `campeonatos/${championshipId}/partidas`
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Get matches service: ", error);
  }
};

export default getMatchesService;
