import { Column, Row } from "components/toolkit";
import ChampionshipContextProvider from "./championship-context-provider";
import ChampionshipTableHeader from "./championship-table-header";


interface ChampionshipTableProps {}
const ChampionshipTable: React.FC<ChampionshipTableProps> = ({}) => {
  return (
    <ChampionshipContextProvider>
      <Column className="rounded-lg overflow-hidden border border-gray-300">
        <ChampionshipTableHeader />
        <Row>
          <Column></Column>
          <Column></Column>
        </Row>
      </Column>
    </ChampionshipContextProvider>
  );
};

export default ChampionshipTable;
