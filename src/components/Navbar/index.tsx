import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import Button from "../Button";
import Hamburger from "@/icons/hamburger";
import useOutsideClick from "@/hooks/useOutsideClick";
import useOnScreen from "@/hooks/useOnScreen";

type Props = {
  isAboutSectionVisible?: boolean;
  isServicesSectionVisible?: boolean;
  scrollToAbout?: () => void;
  scrollToServices?: () => void;
};

export default function Navbar(props: Props) {
  const {
    isAboutSectionVisible,
    isServicesSectionVisible,
    scrollToAbout,
    scrollToServices,
  } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen, setIsMenuOpen]);

  const menuRef = useRef<null | HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const isMenuVisible = useOnScreen(menuRef);

  const aboutButton = (
    <Button
      className="px-4 py-2"
      label="About"
      onClick={scrollToAbout}
      role={isMenuVisible ? "menuitem" : undefined}
      underline={!isMenuOpen && isAboutSectionVisible}
      id={isMenuVisible ? "menu-item-0" : undefined}
    />
  );

  const servicesButton = (
    <Button
      className={classNames("px-4 py-2", {
        ["ml-8"]: !isMenuVisible,
      })}
      label="Services"
      role={isMenuVisible ? "menuitem" : undefined}
      onClick={scrollToServices}
      underline={!isMenuOpen && isServicesSectionVisible}
      id={isMenuVisible ? "menu-item-1" : undefined}
    />
  );

  const faqsButton = (
    <Button
      className={classNames("px-4 py-2", {
        ["ml-8"]: !isMenuVisible,
      })}
      label="FAQ"
      id={isMenuVisible ? "menu-item-2" : undefined}
      role={isMenuVisible ? "menuitem" : undefined}
      href="/faqs"
    />
  );

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
          className="relative inline-block lg:hidden text-left ml-4"
        >
          <Button
            className="inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={onMenuClick}
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
              <div className="py-1" role="none">
                {aboutButton}
                {servicesButton}
                {faqsButton}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
