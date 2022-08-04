import { classNames } from "core/helpers/class-names";
import useChampionshipContext from "../hooks/use-championship-context";
import { ChampionshipTabsType } from "../types/championship-tabs-type";

interface ChampionshipTableTabProps {
  children?: React.ReactNode;
  className?: string;
  tabId: ChampionshipTabsType;
}
const ChampionshipTableTab: React.FC<ChampionshipTableTabProps> = ({
  children,
  className,
  tabId,
}) => {
  const { contextData, dispatch } = useChampionshipContext();
  return (
    <li className={classNames("h-full w-full hover:bg-black/10", className)}>
      <button
        className={classNames(
          "h-full w-full uppercase text-xs",
          contextData.tab === tabId ? "border-b-2 border-white" : "pb-[2px]"
        )}
        onClick={() => dispatch({ type: "setTab", value: tabId })}
      >
        {children}
      </button>
    </li>
  );
};

export default ChampionshipTableTab;
