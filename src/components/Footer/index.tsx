"use client";

import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between bg-secondary-grey px-2 sm:px-4 md:px-10 lg:px-20 xl:px-40 py-3 md:py-6 items-center text-sm">
      <div className="w-[calc(100%-3rem)] md:w-3/4 flex mb-6 mt-3 justify-between">
        <div className="flex flex-col">
          <Button className="" href="/privacy-policy" type="link">
            Privacy Policy
          </Button>
          <Button href="/" type="link">
            Terms and Conditions
          </Button>
        </div>
        <div className="flex flex-col">
          <Button href="/about" type="link">
            About
          </Button>
          <Button href="/about" type="link">
            Services
          </Button>
          <Button href="/about" type="link">
            Contact us
          </Button>
          {/* <p>Careers</p> TODO! */}
        </div>
      </div>
      <p className="text-sm text-center">
        © 2024 AllClean ATX Cleaning Service.
        <br /> All Rights Reserved.
      </p>
    </div>
  );
}
