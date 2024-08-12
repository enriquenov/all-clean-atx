import * as React from "react";
// import style from "./style.module.scss";
// import classNames from "classnames";
import Image from "next/image";
import Button from "../Button";

export default function Navbar() {
  return (
    <div className="sticky bg-brand-cream z-50 top-0 px-40 pt-6 pb-4 shadow-lg flex justify-between">
      <Image
        src="/aca-logo-black-green.svg"
        alt="AllClean ATX Logo"
        className="dark:invert"
        width={240}
        height={24}
        priority
      />
      <div className="flex items-center">
        <Button label="About" />
        <Button className="ml-20 px-4 py-2" label="Services" />
        <Button className="ml-20 px-4 py-2" label="FAQ's" />
        <Button
          type="primary"
          className="ml-20 text-white px-5 py-3"
          label="GET A QUOTE"
        />
      </div>
    </div>
  );
}
