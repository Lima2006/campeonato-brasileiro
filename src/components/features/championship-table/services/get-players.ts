import { api } from "core/lib/api";
import { PlayerType } from "../types/player-type";

type Params = { championshipId: number };
type Response = PlayerType[];
type ServiceType = (params: Params) => Promise<Response>;

const getPlayersService: ServiceType = async ({ championshipId }) => {
  try {
    const response = await api.get<Response>(`/campeonatos/${championshipId}/artilharia`);
    return response.data;
  } catch (error: any) {
    throw new Error("Get matches service: ", error);
  }
};

export default getPlayersService;
