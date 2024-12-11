"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Badge from "@/icons/badge";
// import Handshake from "@/icons/handshake";
import ServicesSection from "../components/ServicesSection";
import Vacuum from "@/icons/vacuum";
import Maid from "@/icons/maid";

export default function Home() {
  return (
    <>
      <div className="my-8 md:my-20 mx-8 sm:mx-10 md:mx-20 max-w-6xl grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/white-kitchen.jpg"
            alt="Cover photo of a cleaning lady"
            width={800}
            height={120}
            priority
          />
        </div>
        <div className="flex items-center justify-center">
          <div className=" flex flex-col md:w-4/5 text-center items-center">
            <h1 className="font-bold text-xl md:text-3xl mb-2 md:mb-10">
              IT&apos;S ALL CLEAN NOW !
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

      <div className="w-full mb-10 md:mb-20 opacity-75">
        <div className="bg-kitchen-countertop bg-no-repeat bg-left bg-cover min-h-96 shadow-standard w-full p-6 md:p-12" />
      </div>

      {/*******************************
       ******* Services Section *******
       *******************************/}

      <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20">
        <ServicesSection />
      </div>

      {/* <div className="max-w-7xl min-h-96 shadow-standard rounded-3xl mx-6 md:w-3/4 p-6 md:p-12 mb-10 md:mb-20">
        <Heading
          align="left"
          className="text-4xl"
          label="Placeholder section #2"
        />
      </div> */}
    </>
  );
}
