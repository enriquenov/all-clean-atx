import * as React from "react";

type Props = {
  className?: string;
  strokeWidth?: number;
};

export default function CircleMinus(props: Props) {
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
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
