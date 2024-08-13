import * as React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: string;
  onClick?: () => void;
  type?: "primary" | "nude" | "secondary";
  underline?: boolean;
};

export default function Button(props: Props) {
  const { className, label, type, onClick, underline = false } = props;

  return (
    <>
      <button
        className={classNames(
          "text-grey font-medium rounded-full relative",
          {
            ["bg-brand-green"]: type === "primary",
            ["border border-brand-green"]: type === "nude",
            ["before:content-[''] before:block before:transition-all duration-150 ease-in-out before:absolute before:left-1 before:bottom-0 before:w-[calc(100%-0.5rem)] before:border-b-4 before:border-b-brand-green"]:
              underline,
          },
          className
        )}
        onClick={onClick}
      >
        {label}
      </button>
      {/* {underline && <div className="w-10 border-b-2 border-b-brand-green" />} */}
    </>
  );
}
