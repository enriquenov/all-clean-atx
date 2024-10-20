"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Badge from "@/icons/badge";
import Handshake from "@/icons/handshake";
import ServicesSection from "../components/ServicesSection";
import Vacuum from "@/icons/vacuum";
import Maid from "@/icons/maid";

export default function Home() {
  return (
    <>
      <div className="my-8 md:my-20 mx-8 sm:mx-10 md:mx-20 max-w-6xl grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/cleaning-lady-cover.png"
            alt="Cover photo of a cleaning lady"
            width={800}
            height={120}
            priority
          />
        </div>
        <div className="flex items-center justify-center">
          <div className=" flex flex-col md:w-4/5 text-center items-center">
            <h1 className="font-bold text-xl md:text-3xl mb-2 md:mb-10">
              IT&apos;S ALL CLEAN NOW
            </h1>
            <p className="w-4/5 mb-4 md:mb-10 text-sm md:text-xl font-normal">
              We clean your houses in an out, because we know you don&apos;t
              like to!
            </p>
            <Button
              type="primary"
              className="text-xs md:text-md lg:text-xl text-white px-3 py-2 md:px-5 md:py-3"
              label="GET A QUOTE"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl min-h-96 bg-brand-light-green mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20">
        <Heading
          className="mb-6 md:mb-12 text-xl md:text-4xl text-center"
          label="We are AllClean ATX"
        />
        <p className="text-lg mb-6 text-center">
          All Clean ATX is a premiere cleaning company in Austin, Texas. We are
          committed to provide high quality services, and we believe in doing an
          outstanding job. We use eco-friendly products and guarantee
          satisfaction and reliability, going above and beyond to ensure you get
          your time back and your home is worry-free. Contact us today for a
          quote!
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-12 lg:mx-4">
          <div className="bg-white rounded-xl p-4 md:p-8 lg:p-8 text-center flex flex-col items-center justify-items-center">
            <Badge />
            <br />
            <strong>Trustworthy</strong>
            Our customers trusts us with passion!
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 lg:p-8 text-center flex flex-col items-center justify-items-center">
            {/* <Handshake /> */}
            <Maid />
            <br />
            <strong>Reliable</strong>
            We are the most reliable out there!
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 lg:p-8 text-center flex flex-col items-center justify-items-center">
            <Vacuum />
            <br />
            <strong>Quality</strong>
            You won&apos;t believe the quality of our services!
          </div>
        </div>
      </div>

      <div className="max-w-7xl min-h-96 shadow-standard rounded-3xl mx-6 w-[calc(100%-3rem)] md:w-3/4 p-6 md:p-12 mb-10 md:mb-20">
        <Heading
          align="left"
          className="text-4xl"
          label="Placeholder section #1 > Replace with Stock Photo - See Trello"
        />
      </div>

      {/*******************************
       ******* Services Section *******
       *******************************/}

      <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20">
        <ServicesSection />
      </div>

      <div className="max-w-7xl min-h-96 shadow-standard rounded-3xl mx-6 md:w-3/4 p-6 md:p-12 mb-10 md:mb-20">
        <Heading
          align="left"
          className="text-4xl"
          label="Placeholder section #2"
        />
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div> */}
    </>
  );
}
