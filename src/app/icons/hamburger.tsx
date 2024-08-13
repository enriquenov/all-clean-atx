import * as React from "react";

type Props = {
  className?: string;
  strokeWidth?: number;
};

export default function Hamburger(props: Props) {
  const { className, strokeWidth } = props;

  const strokeWidthNum = strokeWidth || 1.5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidthNum}
      stroke="currentColor"
      className={className || "size-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
