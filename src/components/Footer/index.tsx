"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between bg-brand-light-green px-2 sm:px-4 md:px-10 lg:px-20 xl:px-40 py-2 md:py-4">
      <div className="flex justify-start border border-red-400">
        <div className="relative w-36 h-12 lg:w-40 lg:h-20">
          <Link href="/">
            <Image
              src="/aca-logo-black-green.svg"
              alt="AllClean ATX Logo"
              layout="fill"
            />
          </Link>
        </div>
        <div className="pl-6">
          <p>© 2024 AllClean ATX Cleaning Service. All Rights Reserved.</p>
          <span>
            <Link href="/">Privacy Policy</Link> |{" "}
            <Link href="/">Terms and Conditions</Link>
          </span>
        </div>
      </div>
      <div className="border border-blue-400">
        <p>About</p>
        <p>Services</p>
        <p>Contact us</p>
        <p>Careers</p>
      </div>
    </div>
  );
}
