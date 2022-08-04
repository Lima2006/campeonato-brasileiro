import React from "react";

export type TextAs = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface TextProps {
  as?: TextAs;
  children?: React.ReactNode;
  className?: string;
}
const Text: React.FC<TextProps> = ({
  as = "span",
  children,
  className,
  ...props
}) => {
  return React.createElement(as, { className, ...props }, children);
};

export default Text;
