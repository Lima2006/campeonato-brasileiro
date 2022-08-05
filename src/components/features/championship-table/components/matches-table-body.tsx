import { Column, Row, Text } from "components/toolkit";
import { classNames } from "core/helpers/class-names";
import useGetMatches from "../hooks/use-get-matches";
import ChampionshipTableCard from "./championship-table-card";

interface MatchesTableBody {
  className?: string;
}
const MatchesTableBody: React.FC<MatchesTableBody> = ({ className }) => {
  const { data } = useGetMatches(14);
  if (!data) return null;
  return (
    <Column className={classNames("divide-y", className)}>
      <div className="grid grid-cols-2 divide-x divide-y">
        {Object.values(data["partidas"]["partidas"]["primeira-fase"]).map(
          (value: any) => (
            <ChampionshipTableCard
              key={value.ida.partida_id}
              match={value.ida}
            />
          )
        )}
      </div>
      <Row className="h-16 px-6 py-2 text-xs text-gray-700">
        <Text>Todos os horários estão no: Horário de Brasília</Text>
      </Row>
    </Column>
  );
};

export default MatchesTableBody;
