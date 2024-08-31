"use client";

import * as React from "react";
import CollapsableSection from "../CollapsibleBox";
import Heading from "../Heading";
import { List } from "../List";
import { STANDARD } from "./content";

export default function ServicesSection() {
  return (
    <>
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-3xl"
        align="center"
        label="Our Services"
      />
      <CollapsableSection
        className="mb-8"
        sectionTitle="Standard Cleaning"
        isOpen={true}
      >
        <div className=" md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={STANDARD.kitchen.title}
              items={STANDARD.kitchen.items}
            />
            <List
              className="mb-8 md:mb-0"
              title={STANDARD.bathroom.title}
              items={STANDARD.bathroom.items}
            />
          </div>
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={STANDARD.bedroom.title}
              items={STANDARD.bedroom.items}
            />
            <List
              title={STANDARD.livingRoom.title}
              items={STANDARD.livingRoom.items}
            />
          </div>
        </div>
      </CollapsableSection>
      <CollapsableSection sectionTitle="Standard Plus+ Cleaning">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div>LEFT CONTAINER</div>
            <div>LEFT CONTAINER</div>
            <div>LEFT CONTAINER</div>
            <div>LEFT CONTAINER</div>
            <div>LEFT CONTAINER</div>
            <div>LEFT CONTAINER</div>
          </div>
          <div>
            <div>RIGHT CONTAINER</div>
            <div>RIGHT CONTAINER</div>
            <div>RIGHT CONTAINER</div>
          </div>
        </div>
      </CollapsableSection>
    </>
  );
}
