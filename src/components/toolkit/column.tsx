import { classNames } from "core/helpers/class-names";
import React from "react";


export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section";
  className?: string;
}
const Column: React.FC<ColumnProps> = ({ as = "div", className, ...props }) =>
  React.createElement(as, {
    className: classNames("flex flex-col", className),
    ...props,
  });

export default Column;
