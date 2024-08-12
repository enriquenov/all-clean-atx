"use client";

import { useState, useCallback, type MouseEventHandler } from "react";
import classNames from "classnames";
import CircleMinus from "@/app/icons/circle-minus";
import CirclePlus from "../../icons/circle-plus";
import Heading from "../Heading";

type Props = {
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
  sectionTitle: string;
};

export default function CollapsableSection(props: Props) {
  const { children, className, isOpen, sectionTitle } = props;

  const [open, setOpen] = useState(isOpen || false);

  const clickHandler: any = useCallback(
    (e: Event) => {
      e.stopPropagation();
      setOpen(!open);
    },
    [open, setOpen]
  );

  const Icon = open ? CircleMinus : CirclePlus;

  const getHeading = (): React.ReactNode => {
    if (typeof sectionTitle === "string") {
      return (
        <Heading
          className="pl-4 text-md md:text-2xl text-gray-900"
          label={sectionTitle}
        />
      );
    } else {
      return sectionTitle;
    }
  };

  return (
    <details
      className={classNames(
        "bg-white py-4 px-4 md:px-6 md:py-6 rounded-xl ",
        className
      )}
      open={isOpen}
    >
      <summary
        className={classNames(
          "flex items-center cursor-pointer transition-all duration-1000 ease-out open:mb-10",
          {
            ["mb-4"]: open,
          }
        )}
        onClick={clickHandler}
      >
        <div className="flex items-center">
          <Icon
            className="w-6 h-6 md:w-10 md:h-10 text-brand-green hover:text-green-700 transition-colors duration-150 pointer-events-none"
            strokeWidth={2}
          />
          {getHeading()}
        </div>
      </summary>
      <div className="transition-transform ease-in-out duration-150 open:ease-in-out">
        {children}
      </div>
    </details>
  );
}
