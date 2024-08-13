import * as React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: "primary" | "nude" | "secondary";
};

export default function Button(props: Props) {
  const { className, label, type, onClick } = props;

  return (
    <button
      className={classNames(
        "text-grey font-medium rounded-full",
        {
          ["bg-brand-green"]: type === "primary",
          ["border border-brand-green"]: type === "nude",
        },
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
