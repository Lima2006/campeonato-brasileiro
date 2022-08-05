/* eslint-disable @next/next/no-img-element */
import { Column, Row, Text } from "components/toolkit";
import { PlayerType } from "../types/player-type";

interface PlayerCardProps {
  playerData: PlayerType;
}
const PlayerCard: React.FC<PlayerCardProps> = ({ playerData }) => {
  if (!playerData) return null;
  return (
    <Column className="w-24 h-48 bg-white border rounded-lg overflow-hidden">
      <img
        className="aspect-square"
        src={playerData.time.escudo}
        alt="Jogador"
      />
      <Column className="flex-grow p-2 justify-between">
        <Column className="space-y-1">
          <Text className="text-sm line-clamp-2">
            {playerData.atleta.nome_popular}
          </Text>
          <Text className="text-xs text-gray-600 truncate">
            {!Array.isArray(playerData.atleta.posicao) &&
              playerData.atleta.posicao.nome}
          </Text>
        </Column>
        <Row className="space-x-1">
          <img className="h-4 w-4" src={playerData.time.escudo} alt="Escudo" />
          <Text className="text-xs text-gray-600 truncate">
            {playerData.time.nome_popular}
          </Text>
        </Row>
      </Column>
    </Column>
  );
};

export default PlayerCard;
