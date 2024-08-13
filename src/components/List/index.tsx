import * as React from "react";
import Heading from "../Heading";
import CheckCircle from "@/icons/check-circle";

type Props = {
  className?: string;
  title: string;
  items: string[];
};

export function List(props: Props) {
  const { className, items, title } = props;

  return (
    <div className={className}>
      <Heading align="left" className="mb-4 text-lg" label={title} />
      <ul>
        {items.map((listItem, idx) => {
          return (
            <li
              className="flex items-start mb-2 md:mb-0"
              key={`${title}-list-item-${idx}`}
            >
              <CheckCircle className="text-brand-green mt-1 w-3 h-3 flex-shrink-0" />
              <p className="ml-4 text-sm">{listItem}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
