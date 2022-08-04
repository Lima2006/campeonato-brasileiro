/* eslint-disable @next/next/no-img-element */
import { Column, Row, Text } from "components/toolkit";
import { classNames } from "core/helpers/class-names";
import { MatchType } from "../types/match-type";

interface ChampionshipTableCardProps {
  className?: string;
  match?: MatchType;
}
const ChampionshipTableCard: React.FC<ChampionshipTableCardProps> = ({
  className,
  match,
}) => {
  if (!match) return null;
  const completionDate = new Date(match.data_realizacao_iso);
  return (
    <Row className={classNames("px-4 py-7 divide-x", className)}>
      <Column className="w-full space-y-2">
        <Row className="space-x-3">
          <img
            src={match.time_mandante.escudo}
            alt="Escudo"
            className="h-6 w-6"
          />
          <Text>{match.time_mandante.nome_popular}</Text>
        </Row>
        <Row className="space-x-3">
          <img
            src={match.time_visitante.escudo}
            alt="Escudo"
            className="h-6 w-6"
          />
          <Text>{match.time_visitante.nome_popular}</Text>
        </Row>
      </Column>
      <Column className="pl-4 min-w-max justify-center items-center">
        <Text className="capitalize">
          {completionDate.toLocaleDateString("pt-BR", {
            weekday: "short",
            day: "2-digit",
            month: "2-digit",
          })}
        </Text>
        <Text>
          {completionDate.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </Column>
    </Row>
  );
};

export default ChampionshipTableCard;
