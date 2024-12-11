"use client";

import * as React from "react";
import Heading from "@/components/Heading";

export default function Page() {
  return (
    <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-3xl"
        align="center"
        label="About us"
      />
      <div className="bg-white p-3 md:px-6 md:py-6 rounded-xl ">
        All Clean ATX is a premiere cleaning company in Austin Texas. We are
        committed to high quality, and we believe in doing an outstanding job,
        We use eco-friendly products and guarantee satisfaction, and
        reliability, going above and beyond to ensure you get your time back and
        your home is worry-free.
        <br />
        <br />
        Contact us today for a quote!
      </div>
    </div>
  );
}
