/* eslint-disable @next/next/no-img-element */
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { Row, Text } from "components/toolkit";
import { classNames } from "core/helpers/class-names";
import { ChartType, LastGamesType } from "../types/chart-type";

interface ClassificationTableRowProps {
  className?: string;
  data?: ChartType;
}
const ClassificationTableRow: React.FC<ClassificationTableRowProps> = ({
  className,
  data,
}) => {
  if (!data) return null;
  const gameResultArrayToIconsArray = (input: LastGamesType) =>
    input.map((input, index) => {
      switch (input) {
        case "v":
          return (
            <CheckCircleIcon key={index} className="text-green-600 h-5 w-5" />
          );
        case "e":
          return (
            <MinusCircleIcon key={index} className="text-gray-400 h-5 w-5" />
          );
        case "d":
          return (
            <PlusCircleIcon
              key={index}
              className="text-red-500 h-5 w-5 rotate-45"
            />
          );
        default:
          return (
            <QuestionMarkCircleIcon
              key={index}
              className="text-gray-200 h-5 w-5"
            />
          );
      }
    });

  return (
    <tr className={classNames("h-10 text-sm", className)}>
      <td>
        <Row className="space-x-3 items-center">
          <div className="w-1 bg-gray-300" />
          <Text className="w-8 text-center">{data.posicao}</Text>
          <img className="h-6 w-6" src={data.time.escudo} alt="Escudo" />
          <Text>{data.time.nome_popular}</Text>
        </Row>
      </td>
      <td>{data.pontos}</td>
      <td>{data.jogos}</td>
      <td>{data.vitorias}</td>
      <td>{data.empates}</td>
      <td>{data.derrotas}</td>
      <td>{data.gols_pro}</td>
      <td>{data.gols_contra}</td>
      <td>{data.saldo_gols}</td>
      <td>
        <Row className="justify-center">
          {gameResultArrayToIconsArray(data.ultimos_jogos.slice(0, 5))}
        </Row>
      </td>
    </tr>
  );
};

export default ClassificationTableRow;
