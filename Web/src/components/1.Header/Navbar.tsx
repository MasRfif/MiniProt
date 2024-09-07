"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Event", href: "/Product" },
    { name: "FeedBack", href: "/About" },
    { name: "About", href: "/Teams" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <section>
        <nav className="fixed w-full h-24 z-10  shadow-xl bg-black/80  rounded-b-3xl backdrop-filter backdrop-blur-sm">
          <div className="flex justify-between items-center h-full w-full px-4 z-10">
            <Image
              src="/LogoPrimary1.png"
              alt="Text-logo"
              width={100}
              height={100}
            />
            <div className="relative w-96 hidden md:block">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full max-w-72 px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
                <button
                  type="button"
                  className="absolute rounded-xl right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <Link href="/">
              <Image
                src="/middle.png"
                alt="Primary-logo"
                width={100}
                height={100}
              />
            </Link>
            <div role="none" className="hidden md:flex">
              <ul className="flex justify-between w-96">
                {navLinks.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className={`py-2 px-3 md:p-0 font-bold text-white md:bg-transparent md:text-white md:dark:text-white hover:bg-transparent hover:text-yellow-950 transition duration-300 ease-in-out`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="avatar hidden md:block">
              <div className="ring-red-800 ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-40 bg-black bg-opacity-50 transition-transform duration-300 ease-in-out ${
              isSearchOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="relative w-full px-4 py-2 bg-[#292929]">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-[#292929] transition-all duration-300 ease-in-out p-4">
              <ul className="flex flex-col items-center">
                <li className="w-full text-center mb-4">
                  <div className="avatar">
                    <div className="ring-red-800 ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </li>
                {navLinks.map((menu, index) => (
                  <li key={index} className="w-full text-center">
                    <Link
                      href={menu.href}
                      className="block py-2 px-4 text-white hover:bg-gray-700 transition duration-300 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </section>
    </>
  );
}
