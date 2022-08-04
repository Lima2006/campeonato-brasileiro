import useGetMatches from "../hooks/use-get-matches";
import ChampionshipTableCard from "./championship-table-card";

const MatchesTableBody: React.FC = () => {
  const { data } = useGetMatches(14);
  if (!data) return null;
  return (
    <div className="grid grid-cols-2 divide-x divide-y">
      {Object.values(data["partidas"]["partidas"]["primeira-fase"]).map(
        (value: any) => (
          <ChampionshipTableCard key={value.ida.partida_id} match={value.ida} />
        )
      )}
    </div>
  );
};

export default MatchesTableBody;
