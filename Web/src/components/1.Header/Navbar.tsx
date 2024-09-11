import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "Home" },
    { name: "Event", href: "/Product" },
    { name: "FeedBack", href: "/About" },
    { name: "About", href: "/Teams" },
  ];
  return (
    <>
      <section className="pb-5">
        <nav className="w-full h-24 shadow-xl bg-[#292929] ">
          <div className="flex justify-between items-center h-full w-full px-4">
            <Image
              src="/LogoPrimary1.png"
              alt="Text-logo"
              width={100}
              height={100}
            />
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
            <Image
              src="/middle.png"
              alt="Primary-logo"
              width={100}
              height={100}
              className="max-[450px]:hidden"
            />
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
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
            </div>
            <div className="avatar max-[450px]:hidden">
              <div className=" ring-red-800 ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </nav>
      </section>
      ;
    </>
  );
}
