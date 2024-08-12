import * as React from "react";
// import style from "./style.module.scss";
// import classNames from "classnames";
import Image from "next/image";
import Button from "../Button";

export default function Navbar() {
  return (
    <div className="sticky bg-brand-cream z-50 top-0 px-2 sm:px-4 md:px-10 lg:px-20 xl:px-40 py-2 md:py-3 shadow-lg flex justify-between">
      <div className="relative w-36 h-12 lg:w-72 lg:h-24">
        <Image
          src="/aca-logo-black-green.svg"
          alt="AllClean ATX Logo"
          layout="fill"
        />
      </div>
      <div className="flex items-center">
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          <Button className="px-4 py-2" label="About" />
          <Button className="px-4 py-2" label="Services" />
          <Button className="px-4 py-2" label="FAQ's" />
        </div>
        <Button
          type="primary"
          className="md:ml-8 text-xs lg:text-md lg:text-xl text-white px-3 py-2 md:px-5 md:py-3"
          label="GET A QUOTE"
        />
      </div>
    </div>
  );
}
