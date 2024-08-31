"use client";

import * as React from "react";
import ServicesSection from "@/components/ServicesSection";

export default function Page() {
  return (
    <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <ServicesSection />
    </div>
  );
}
