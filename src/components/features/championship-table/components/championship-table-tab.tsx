import { classNames } from "core/helpers/class-names";

interface ChampionshipTableTabProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}
const ChampionshipTableTab: React.FC<ChampionshipTableTabProps> = ({
  children,
  className,
  onClick,
  active,
}) => {
  return (
    <li className={classNames("h-full w-full hover:bg-black/10", className)}>
      <button
        className={classNames(
          "h-full w-full uppercase text-xs",
          active ? "border-b-2 border-white" : "pb-[2px]"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

export default ChampionshipTableTab;
