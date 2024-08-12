"use client";

import { useState, useCallback } from "react";
import CircleMinus from "@/app/icons/circle-minus";
import CirclePlus from "../../icons/circle-plus";
import Heading from "../Heading";

type Props = {
  isOpen?: boolean;
  children: React.ReactElement;
  sectionTitle: string;
};

export default function CollapsableSection(props: Props) {
  const { children, isOpen, sectionTitle } = props;

  const [open, setOpen] = useState(isOpen || false);

  console.log("Enrique isOpen", open);

  const clickHandler = useCallback(() => setOpen(!open), [open, setOpen]);

  return (
    <details
      className="bg-white p-12 rounded-xl transition-transform"
      open={isOpen}
    >
      <summary className="flex items-center mb-4">
        <div className="flex items-center" onClick={clickHandler}>
          {open ? (
            <CircleMinus
              className="w-12 h-12 text-brand-green hover:text-green-700 transition-colors duration-150"
              strokeWidth={2}
            />
          ) : (
            <CirclePlus
              className="w-12 h-12 text-brand-green hover:text-green-700 transition-colors duration-150"
              strokeWidth={2}
            />
          )}
          <Heading
            className="pl-4 text-gray-900 cursor-pointer"
            level="3xl"
            label={sectionTitle}
          />
        </div>
      </summary>
      {children}
    </details>
  );
}
