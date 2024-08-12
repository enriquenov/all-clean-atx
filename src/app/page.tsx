import * as React from "react";
import Image from "next/image";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import CirclePlus from "./icons/circle-plus";
import CollapsableSection from "./components/CollapsableSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="my-20 mx-60 grid grid-cols-2 gap-4 sm:grid-cols-2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/cleaning-lady-cover.png"
              alt="Cover photo of a cleaning lady"
              className="dark:invert"
              width={800}
              height={120}
              priority
            />
          </div>
          <div className="flex items-center justify-center">
            <div className=" flex flex-col w-4/5 text-center items-center">
              <h1 className="text-3xl font-bold mb-10">
                GUARANTEED TO LEAVE IT
                <br /> ALL CLEAN
              </h1>
              <p className="w-4/5 mb-10 text-xl font-normal">
                We clean your boossies in an out,
                <br />
                because we know you don't like to!
              </p>
              <Button
                type="primary"
                className="text-white px-5 py-3"
                label="GET A QUOTE"
              />
            </div>
          </div>
        </div>

        <div className="min-h-96 bg-brand-light-green mx-20 w-4/5 rounded-3xl p-12 mb-20">
          <Heading
            className="mb-12 text-center"
            label="We are AllClean ATX"
            level="4xl"
          />
          <div className="grid grid-cols-4 gap-8 sm:grid-cols-4">
            <div className="bg-white min-h-[220px] rounded-xl p-12">
              Lorem ipsum something rather. Lorem ipsum something rather. Lorem
              ipsum something rather.
            </div>
            <div className="bg-white min-h-[220px] rounded-xl p-12">
              Lorem ipsum something rather. Lorem ipsum something rather. Lorem
              ipsum something rather.
            </div>
            <div className="bg-white min-h-[220px] rounded-xl p-12">
              Lorem ipsum something rather. Lorem ipsum something rather. Lorem
              ipsum something rather.
            </div>
            <div className="bg-white min-h-[220px] rounded-xl p-12">
              Lorem ipsum something rather. Lorem ipsum something rather. Lorem
              ipsum something rather.
            </div>
          </div>
        </div>

        <div className="w-4/5 min-h-96 shadow-standard rounded-3xl p-12 mb-20">
          <Heading align="left" level="4xl" label="Placeholder section" />
        </div>

        <div className="w-4/5 min-h-96 bg-brand-light-green rounded-3xl p-12 mb-20">
          <Heading
            className="mb-8"
            align="center"
            level="3xl"
            label="Our services"
          />
          <CollapsableSection sectionTitle="Standard" isOpen={true}>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 ">
              <div>
                <div>LEFT CONTAINER</div>
                <div>LEFT CONTAINER</div>
                <div>LEFT CONTAINER</div>
              </div>
              <div>
                <div>RIGHT CONTAINER</div>
                <div>RIGHT CONTAINER</div>
                <div>RIGHT CONTAINER</div>
              </div>
            </div>
          </CollapsableSection>
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
      </main>
    </>
  );
}
