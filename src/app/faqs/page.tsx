"use client";

import * as React from "react";
import CollapsableBox from "../../components/CollapsibleBox";
import classNames from "classnames";
import { FAQS } from "./content";
import Heading from "@/components/Heading";

export default function Page() {
  return (
    <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <Heading
        className="mb-8 md:mb-12 text-xl md:text-3xl"
        label="Frequently Asked Questions"
      />
      {FAQS.map((faq, idx) => {
        return (
          <CollapsableBox
            className={classNames({
              ["mt-4"]: idx !== 0,
            })}
            key={faq.question}
            sectionTitle={faq.question}
          >
            <p className="ml-10">{faq.answer}</p>
          </CollapsableBox>
        );
      })}
    </div>
  );
}
