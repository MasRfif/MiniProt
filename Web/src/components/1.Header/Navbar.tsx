"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: "Home", href: "/Home" },
    { name: "Event", href: "/event" },
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

  const [navBar, setNavbar] = useState<Boolean | undefined>();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    changeBackground();

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <section>
        <nav
          className={`${
            navBar || showNavBar
              ? "bg-black/20 transition-colors backdrop-filter backdrop-blur-sm duration-75"
              : "bg-black/50"
          } fixed w-full h-fit z-30 shadow-xl`}
        >
          <div className="flex justify-between items-center h-fit w-full px-4 z-10">
            <Image
              src="/LogoPrimary1.png"
              alt="Text-logo"
              width={80}
              height={70}
            />
            <div className="relative w-96 hidden md:block">
              <form className="flex items-center max-w-sm mx-auto">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className=" w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-ring-red-500"
                    placeholder="Search Event Name"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg border  border-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-700 dark:bg-gray-700 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            <Link href="/">
              <Image
                src="/middle.png"
                alt="Primary-logo"
                width={80}
                height={70}
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

            <div className="flex items-center ">
              {isLoggedIn ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost w-1 rounded-btn"
                  >
                    <div className="avatar hidden md:block">
                      <div className="ring-red-800 ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                        <Image
                          alt="IconImg"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-btn z-[1] mt-4 w-52 p-2 shadow"
                  >
                    <li>
                      <Link href="/user">Profile</Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link href="/SignUp">
                  <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                  </button>
                </Link>
              )}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content ">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-black outline outline-2 outline-red-700 drawer-button"
                  ></label>
                </div>
                <div className="drawer-side ">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay "
                  ></label>
                  <div className="bg-black h-full w-80 rounded-xl p-4">
                    <div className=" w-72 py-4 ">
                      <form className="max-w-md mx-auto">
                        <label
                          htmlFor="default-search"
                          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                          <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            <svg
                              className="w-4 h-4 text-white dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>{" "}
                    <ul className="flex flex-col justify-between w-96 space-y-2">
                      {navLinks.map((menu, index) => (
                        <li
                          key={index}
                          className="block w-72 p-5 bg-gray-800 hover:bg-gray-900 rounded-xl transition duration-300 ease-in-out"
                        >
                          <Link
                            href={menu.href}
                            className={`py-2 px-3 md:p-0 font-bold text-white md:bg-transparent md:text-white md:dark:text-white hover:text-yellow-950 transition duration-300 ease-in-out`}
                          >
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
