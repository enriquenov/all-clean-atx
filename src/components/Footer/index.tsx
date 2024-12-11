"use client";

import React from "react";
import Button from "../Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-between bg-secondary-grey px-2 sm:px-4 md:px-10 lg:px-20 xl:px-40 py-6 items-center text-sm">
      <div className="w-full flex mb-6 mt-3 justify-evenly">
        <div className="flex flex-col">
          <Button className="" href="/privacy-policy" type="link">
            Privacy Policy
          </Button>
          <Button href="/terms-of-use" type="link">
            Terms of Use
          </Button>
        </div>
        <div className="flex flex-col">
          <Button href="/about" type="link">
            About
          </Button>
          <Button href="/about" type="link">
            Services
          </Button>
          <Button href="/faqs" type="link">
            FAQs
          </Button>
          {/* <p>Careers</p> TODO! */}
        </div>
        <div className="flex flex-col text-b">
          <div>
            <span className="font-semibold">Contact us:</span>
            <br /> Phone:{" "}
            <a
              className="text-blue-500 underline hover:text-blue:400"
              href="tel:+15126414433"
            >
              (512) 641-4433
            </a>{" "}
            <br />
            Location:{" "}
            <a
              className="text-blue-500 underline hover:text-blue:400"
              href="https://goo.gl/maps/8Dy6vC6qQ7T2"
              target="_blank"
            >
              Austin{" "}
            </a>
          </div>
          {/* <p>Careers</p> TODO! */}
        </div>
      </div>
      <p className="text-sm text-center">
        © {currentYear} <span className="text-black font-semibold">All</span>
        <span className="text-brand-green font-semibold"> Clean</span>{" "}
        <span className="text-black font-semibold">ATX</span> Cleaning Service.
        <br /> All Rights Reserved.
      </p>
    </div>
  );
}
