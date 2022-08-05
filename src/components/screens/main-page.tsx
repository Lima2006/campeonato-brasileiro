import { ChampionshipTable } from "components/features/championship-table";
import Head from "next/head";

const MainPage: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Campeonato Brasileiro</title>
      </Head>
      <div className="w-screen flex flex-col pt-16 items-center">
        <ChampionshipTable />
      </div>
    </main>
  );
};

export default MainPage;
