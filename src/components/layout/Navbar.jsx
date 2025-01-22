"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo_dark from "../../../public/images/logo_dark.png";
import logo_light from "../../../public/images/logo_light.png";
import Button from "../common/button/Button";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 pb-10 sm:pb-16 lg:mb-[70px] py-5">
      <nav className={`flex items-center justify-between`}>
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={logo_light}
            className="block dark:hidden"
            width={170}
            alt="logo_light"
          />
          <Image
            src={logo_dark}
            className="hidden dark:block"
            width={170}
            alt="logo_light"
          />
        </Link>

        <ul className="hidden lg:flex items-center space-x-6">
          {[
            "Home",
            "About Me",
            "Services",
            "Projects",
            "Testimonials",
            "Contact",
          ].map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <li key={index}>
                <Link
                  href={path}
                  className={`text-xl font-normal text-text-black dark:text-text-white  hover:text-text-orange transition-all duration-300`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="primary" className="px-[18px]">
            Downlaod CV
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            aria-expanded={mobileSidebarOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden relative flex items-center justify-center rounded-[10px] p-[10px] w-12 h-12 text-text-black dark:text-text-black cursor-pointer"
          >
            <div
              className={`relative flex items-center justify-center w-6 h-6 transform transition-transform duration-300 ${
                mobileSidebarOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              <span
                className={`absolute block w-6 h-0.5 bg-text-black dark:bg-text-white transition-all duration-300 ${
                  mobileSidebarOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute block w-6 h-0.5 bg-text-black dark:bg-text-white transition-all duration-300 ${
                  mobileSidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block w-6 h-0.5 bg-text-black dark:bg-text-white transition-all duration-300 ${
                  mobileSidebarOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-50"
            : "-translate-x-full opacity-0 z-[-1]"
        } lg:hidden bg-white shadow-sm p-4 text-center absolute right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-text-black flex flex-col">
          {[
            "Home",
            "About Me",
            "Services",
            "Projects",
            "Testimonials",
            "Contact",
          ].map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <li key={index}>
                <Link
                  href={path}
                  className="text-base font-normal hover:text-text-orange transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button variant="primary" className="px-[18px] py-3 w-full mt-4">
          Downlaod CV
        </Button>
      </aside>
    </div>
  );
};

export default Navbar;
