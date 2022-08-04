import { ChampionshipTable } from "components/features/championship-table";
import Head from "next/head";

const MainPage: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Campeonato Brasileiro</title>
      </Head>
      <ChampionshipTable />
    </main>
  );
};

export default MainPage;
