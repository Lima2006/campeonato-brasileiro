import { Column } from "components/toolkit";
import React from "react";
import { ChampionshipTabsType } from "../types/championship-tabs-type";
import ChampionshipTableHeader from "./championship-table-header";
import ChampionshipTableTab from "./championship-table-tab";
import MatchesTableBody from "./matches-table-body";

const ChampionshipTable: React.FC = () => {
  const [actualTab, setActualTab] =
    React.useState<ChampionshipTabsType>("partidas");
  const tabForRender = () => {
    switch (actualTab) {
      case "partidas":
        return <MatchesTableBody />;
      default:
        return null;
    }
  };
  return (
    <Column className="rounded-lg overflow-hidden border border-gray-300">
      <ChampionshipTableHeader title="Brasileirão Série B">
        <ChampionshipTableTab
          active={actualTab === "partidas"}
          onClick={() => setActualTab("partidas")}
        >
          Partidas
        </ChampionshipTableTab>
        <ChampionshipTableTab
          active={actualTab === "jogadores"}
          onClick={() => setActualTab("jogadores")}
        >
          Jogadores
        </ChampionshipTableTab>
      </ChampionshipTableHeader>
      {tabForRender()}
    </Column>
  );
};

export default ChampionshipTable;
