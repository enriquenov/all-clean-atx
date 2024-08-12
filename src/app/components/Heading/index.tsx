import * as React from "react";
import classNames from "classnames";

type Props = {
  align?: "left" | "center" | "right";
  label: string;
  className?: string;
};

export default function Heading(props: Props) {
  const { align, label, className } = props;

  return (
    <p
      className={classNames(
        `text-gray-800 font-bold text-${align || "center"}`,
        className
      )}
    >
      {label}
    </p>
  );
}
