import * as React from "react";
import classNames from "classnames";

type Props = {
  align?: "left" | "center" | "right";
  label: string;
  className?: string;
  level?: "xs" | "sm" | "md" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
};

export default function Heading(props: Props) {
  const { align, label, className, level } = props;

  return (
    <p
      className={classNames(
        `text-${level} text-gray-800 font-bold text-${align || "center"}`,
        className
      )}
    >
      {label}
    </p>
  );
}
