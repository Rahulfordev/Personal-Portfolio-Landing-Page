"use client";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo_dark from "../../../public/images/logo_dark.png";
import logo_light from "../../../public/images/logo_light.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-lighter dark:bg-background-dark text-center">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center items-center py-10 sm:py-20">
          <Image
            src={logo_light}
            className="block dark:hidden"
            alt="logo_light"
          />
          <Image
            src={logo_dark}
            className="hidden dark:block"
            alt="logo_light"
          />
        </div>

        {/* Navigation Links */}
        <div className="pb-10 sm:pb-[70px]">
          <ul className="flex flex-wrap justify-center space-x-6">
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
                    className="text-text-black dark:text-text-white text-base sm:text-xl font-normal"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="pb-10 sm:pb-14">
          <div className="flex justify-center space-x-4 text-text-black text-2xl sm:text-3xl dark:text-text-white">
            <Link href="#">
              <FaFacebook className="" />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>

            <Link href="#">
              <FaInstagram />
            </Link>

            <Link href="#">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-background-gray dark:bg-background-darker text-text-white py-6 text-base sm:text-xl font-normal">
        <p>
          &copy; 2023 <span className="text-text-orange font-bold">Mumair</span>
          . All Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
}
