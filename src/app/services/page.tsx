"use client";

import * as React from "react";
import ServicesSection from "@/components/ServicesSection";

export default function Page() {
  return (
    <div className="bg-brand-light-green mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-4/5 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <div className="bg-brand-light-green mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-4/5 rounded-3xl p-6 md:p-12 mb-10 md:mb-20">
        <ServicesSection />
      </div>
    </div>
  );
}
