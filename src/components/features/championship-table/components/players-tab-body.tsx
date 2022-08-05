/* eslint-disable @next/next/no-img-element */
import useGetPlayers from "../hooks/use-get-players";
import PlayerCard from "./player-card";

interface PlayersTabBodyProps {}
const PlayersTabBody: React.FC<PlayersTabBodyProps> = ({}) => {
  const { data } = useGetPlayers(14);
  if (!data) return null;
  return (
    <div className="grid grid-cols-6 gap-2 p-2 shadow-gray-300 mx-auto">
      {data.map((item) => (
        <PlayerCard key={item.atleta.atleta_id} playerData={item} />
      ))}
    </div>
  );
};

export default PlayersTabBody;
