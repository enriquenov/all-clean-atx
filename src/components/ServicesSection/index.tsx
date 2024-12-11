"use client";

import * as React from "react";
import CollapsableSection from "../CollapsibleBox";
import Heading from "../Heading";
import { List } from "../List";
import {
  STANDARD,
  REFRIGERATOR,
  MOVING,
  BLINDS,
  BASEBOARDS,
  CARPET,
} from "./content";

export default function ServicesSection() {
  return (
    <>
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-3xl"
        align="center"
        label="Our Services"
      />
      <CollapsableSection
        className="mb-10"
        sectionTitle="Standard"
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
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-2xl"
        align="center"
        label="Add-ons"
      />
      <CollapsableSection
        className="mb-8"
        sectionTitle="Refrigerator Cleaning: $50"
      >
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={REFRIGERATOR.what.title}
              items={REFRIGERATOR.what.items}
            />
          </div>
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={REFRIGERATOR.desinfect.title}
              items={REFRIGERATOR.desinfect.items}
            />
            <List
              className="mb-8"
              title={REFRIGERATOR.puttingBack.title}
              items={REFRIGERATOR.puttingBack.items}
            />
          </div>
        </div>
      </CollapsableSection>
      <CollapsableSection
        className="mb-8"
        sectionTitle="Blind Cleaning Service: $10 each"
      >
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={BLINDS.venetian.title}
              items={BLINDS.venetian.items}
            />
            <List
              className="mb-8"
              title={BLINDS.wooden.title}
              items={BLINDS.wooden.items}
            />
          </div>
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={BLINDS.fabric.title}
              items={BLINDS.fabric.items}
            />
            <List
              className="mb-8"
              title={BLINDS.vertical.title}
              items={BLINDS.vertical.items}
            />
          </div>
        </div>
      </CollapsableSection>
      <CollapsableSection
        className="mb-8"
        sectionTitle="Baseboard Cleaning: $0.10 per sqft"
      >
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={BASEBOARDS.process.title}
              items={BASEBOARDS.process.items}
            />
          </div>
        </div>
      </CollapsableSection>
      <CollapsableSection
        className="mb-10"
        sectionTitle="Deep Carpet Clean: $0.16 per sqft"
      >
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={CARPET.process.title}
              items={CARPET.process.items}
            />
          </div>
        </div>
      </CollapsableSection>
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-2xl"
        align="center"
        label="Move In / Move Out"
      />
      <CollapsableSection isOpen sectionTitle="Standard">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={MOVING.kitchen.title}
              items={MOVING.kitchen.items}
            />
            <List
              className="mb-8"
              title={MOVING.livingRoom.title}
              items={MOVING.livingRoom.items}
            />
            <List
              className="mb-8"
              title={MOVING.bedroom.title}
              items={MOVING.bedroom.items}
            />
          </div>
          <div className="flex flex-col">
            <List
              className="mb-8"
              title={MOVING.bathroom.title}
              items={MOVING.bathroom.items}
            />
            <List
              title={MOVING.additional.title}
              items={MOVING.additional.items}
            />
          </div>
        </div>
      </CollapsableSection>
    </>
  );
}
