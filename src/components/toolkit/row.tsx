import { classNames } from "../../core/helpers/class-names";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Row: React.FC<RowProps> = ({ className, ...props }) => (
  <div className={classNames("flex flex-row", className)} {...props} />
);

export default Row;
