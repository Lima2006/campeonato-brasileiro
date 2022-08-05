export type MatchType = {
  partida_id: number;
  time_mandante: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  time_visitante: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  status: string;
  slug: string;
  data_realizacao: string;
  hora_realizacao: string;
  data_realizacao_iso: string;
  _link: string;
};

export type RawMatchesType = {
  partidas: {
    partidas: {
      "primeira-fase": {
        "chave-1": {ida: MatchType};
        "chave-2": {ida: MatchType}
      };
    };
  };
};
