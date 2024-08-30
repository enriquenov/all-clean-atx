"use client";

import * as React from "react";
import CollapsableBox from "@/components/CollapsibleBox";

export default function Page() {
  return (
    <div className="bg-brand-light-green mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-4/5 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <CollapsableBox sectionTitle="When do you charge my credit card?">
        <p>Lorem ipsum something rather</p>
      </CollapsableBox>
      <CollapsableBox sectionTitle="What fees could I incur by cancelling or rescheduling?">
        <p>Lorem ipsum something rather</p>
      </CollapsableBox>
    </div>
  );
}
