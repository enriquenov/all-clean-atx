import * as React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  id?: string;
  onClick?: () => void;
  role?: string;
  type?: "primary" | "nude" | "secondary";
  underline?: boolean;
};

export default function Button(props: Props) {
  const {
    children,
    className,
    label,
    type,
    role,
    onClick,
    underline = false,
  } = props;

  return (
    <>
      <button
        type="button"
        className={classNames(
          "text-grey font-medium rounded-full relative",
          {
            ["bg-brand-green"]: type === "primary",
            ["border border-brand-green"]: type === "nude",
            ["before:content-[''] before:block before:transition-all duration-150 ease-in-out before:absolute before:left-0 before:bottom-0 before:w-full before:border-b-4 before:border-b-brand-green"]:
              underline,
          },
          className
        )}
        onClick={onClick}
        role={role}
      >
        {label}
        {children}
      </button>
      {/* {underline && <div className="w-10 border-b-2 border-b-brand-green" />} */}
    </>
  );
}
