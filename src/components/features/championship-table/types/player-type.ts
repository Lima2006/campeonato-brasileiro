export type PlayerType = {
  atleta: {
    atleta_id: number;
    nome_popular: string;
    posicao:
      | {
          nome: string;
          sigla: string;
        }
      | any[];
  };
  time: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  gols: number;
};
