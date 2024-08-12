import * as React from "react";
import classNames from "classnames";

type Props = {
  label: string;
  className?: string;
  type?: "primary" | "nude" | "secondary";
};

export default function Button(props: Props) {
  const { type, className, label } = props;

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
    >
      {label}
    </button>
  );
}
