"use client";

import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Button";
import Hamburger from "@/icons/hamburger";
import useOutsideClick from "@/hooks/useOutsideClick";
import useOnScreen from "@/hooks/useOnScreen";

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen, setIsMenuOpen]);

  const menuRef = useRef<null | HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const isMenuVisible = useOnScreen(menuRef);

  const underlineHoverClass =
    "hover:before:content-[''] hover:before:block transition-all duration-500 ease-in-out hover:before:absolute hover:before:left-0 hover:before:bottom-0 hover:before:w-full hover:before:border-b-4 hover:before:border-b-brand-green";

  const aboutButton = (
    <Button
      className={classNames("px-4 py-2", underlineHoverClass)}
      label="About"
      role={isMenuVisible ? "menuitem" : undefined}
      underline={!isMenuOpen && pathname === "/about"}
      id={isMenuVisible ? "menu-item-0" : undefined}
      href="/about"
      onClick={toggleMenu}
    />
  );

  const servicesButton = (
    <Button
      className={classNames("px-4 py-2", underlineHoverClass, {
        ["ml-8"]: !isMenuVisible,
      })}
      label="Services"
      role={isMenuVisible ? "menuitem" : undefined}
      underline={!isMenuOpen && pathname === "/services"}
      id={isMenuVisible ? "menu-item-1" : undefined}
      href="/services"
      onClick={toggleMenu}
    />
  );

  const faqsButton = (
    <Button
      className={classNames("px-4 py-2", underlineHoverClass, {
        ["ml-8"]: !isMenuVisible,
      })}
      label="FAQs"
      id={isMenuVisible ? "menu-item-2" : undefined}
      role={isMenuVisible ? "menuitem" : undefined}
      href="/faqs"
      underline={!isMenuOpen && pathname === "/faqs"}
      onClick={toggleMenu}
    />
  );

  return (
    <div className="sticky bg-brand-cream z-50 top-0 px-2 sm:px-4 md:px-10 lg:px-20 xl:px-40 py-2 md:py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="relative w-32 h-10 lg:w-72 lg:h-24">
          <Link href="/">
            <Image
              src="/aca-logo-black-green.svg"
              alt="AllClean ATX Logo"
              layout="fill"
            />
          </Link>
        </div>
        <div className="flex items-center h-10">
          <div className="hidden lg:block">
            {aboutButton}
            {servicesButton}
            {faqsButton}
          </div>
          <Button
            type="primary"
            className="md:ml-8 text-xs lg:text-md lg:text-xl text-white px-3 py-2 md:px-5 md:py-3"
            label="GET A QUOTE"
          />
          <div
            ref={menuRef}
            className="relative inline-block lg:hidden text-left ml-2 lg:ml-4"
          >
            <Button
              className="inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              <Hamburger
                className="block lg:hidden text-gray-800 w-10 h-10"
                strokeWidth={2}
              />
            </Button>
            {isMenuOpen && (
              <div
                className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1 flex flex-col" role="none">
                  {aboutButton}
                  {servicesButton}
                  {faqsButton}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
