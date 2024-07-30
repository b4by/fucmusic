"use client";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { FormModal } from "./form-modal/form-modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mx-auto w-full justify-center border-b border-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col border-x px-8 py-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-row items-center justify-between text-white">
          <Link href="/" className="group block flex-shrink-0">
            <div className="flex items-center">
              <Logo className="transition ease-in group-hover:opacity-75" />
              <div className="ml-3 flex flex-col gap-y-[1px]">
                <p className="font-bold uppercase leading-none text-white transition ease-in group-hover:text-gray-300">
                  FUC MUSIC
                </p>
                <span className="text-[10px] transition ease-in group-hover:text-gray-300">
                  студия звукозаписи
                </span>
              </div>
            </div>
          </Link>
          <button
            className="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                className="inline-flex"
                strokeWidth="2"
              ></path>
              <path
                d="M6 18L18 6M6 6l12 12"
                className="hidden"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-center gap-3 p-4 px-5 opacity-100 md:pb-0 lg:mt-0 lg:flex lg:flex-row lg:justify-start lg:gap-6 lg:p-0 lg:px-0`}
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="transform py-2 text-sm text-white/60 transition duration-200 ease-in-out hover:text-white focus:text-white focus:shadow-none focus:outline-none md:my-0 lg:ml-auto lg:py-4"
            >
              {link.name}
            </Link>
          ))}
          {/* <button
            type="button"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="rounded-md border border-[#F18336] bg-[#F18336] px-3 py-2 font-bold text-white transition duration-300 ease-in-out hover:opacity-75"
          >
            Дистрибуция
          </button> */}
        </nav>
      </div>
      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(!isFormOpen)}
      />
    </div>
  );
};
