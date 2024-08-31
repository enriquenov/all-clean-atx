"use client";

import * as React from "react";
import classNames from "classnames";
import Heading from "@/components/Heading";

export default function Page() {
  return (
    <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-3xl"
        label="Terms of Use"
      />
      <p>
        All Clean ATX is committed to safeguarding the privacy of our customers.
        This privacy policy (the &quot;Policy&quot;) explains how we collect,
        use, and protect personal information.
      </p>
    </div>
  );
}
