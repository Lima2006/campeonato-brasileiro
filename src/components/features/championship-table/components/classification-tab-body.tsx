import { Column } from "components/toolkit";
import { classNames } from "core/helpers/class-names";
import useGetChart from "../hooks/use-get-chart";
import ClassificationTableRow from "./classification-table-row";

interface ClassificationTabBodyProps {}
const ClassificationTabBody: React.FC<ClassificationTabBodyProps> = ({}) => {
  const { data } = useGetChart(14);
  if (!data) return null;
  const tableTitles = [
    "Clube",
    "Pts",
    "PJ",
    "VIT",
    "E",
    "DER",
    "GP",
    "GC",
    "SG",
    "Últimas cinco",
  ];

  return (
    <Column>
      <table className="divide-y">
        <thead className="text-gray-500 text-xs">
          <tr className="h-10">
            {tableTitles.map((title, index) => (
              <th
                key={index}
                className={classNames(
                  "font-normal",
                  index === 0 && "text-left px-4"
                )}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center divide-y">
          {data.map((item) => (
            <ClassificationTableRow key={item.time.time_id} data={item} />
          ))}
        </tbody>
      </table>
    </Column>
  );
};

export default ClassificationTabBody;
