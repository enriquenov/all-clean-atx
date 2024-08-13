"use client";

import * as React from "react";
import Navbar from "../../components/Navbar";
import CollapsableSection from "../../components/CollapsableSection";
import Heading from "../../components/Heading";
import { List } from "../../components/List";

export default function Page() {
  return (
    <>
      <Navbar
      // isAboutSectionVisible={isAboutSectionVisible}
      // isServicesSectionVisible={isServicesSectionVisible}
      // scrollToAbout={scrollToAbout}
      // scrollToServices={scrollToServices}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="bg-brand-light-green mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-4/5 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
          <CollapsableSection sectionTitle="When do you charge my credit card?">
            <p>Lorem ipsum something rather</p>
          </CollapsableSection>
          <CollapsableSection sectionTitle="What fees could I incur by cancelling or rescheduling?">
            <p>Lorem ipsum something rather</p>
          </CollapsableSection>
        </div>
      </main>
    </>
  );
}
