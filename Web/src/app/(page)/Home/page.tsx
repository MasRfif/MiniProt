import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const navLinks = [
    { name: "Home", href: "Home" },
    { name: "Event", href: "/Product" },
    { name: "FeedBack", href: "/About" },
    { name: "About", href: "/Teams" },
  ];
  return (
    <main>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </nav>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full flex flex-col items-center justify-center text-center text-3xl font-bold">
            Welcome to our website
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center text-xl font-semibold">
            This currently Our HomePage Its under construction
          </div>
          <Link
            href="/"
            className="py-4 px-8 bg-yellow-950 text-white font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
          >
            Contact King Charles
          </Link>
        </div>
      </section>

      <footer className="footer bg-[#292929] text-base-content p-10">
        <nav>
          <h6 className="footer-title text-red-600">Services</h6>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-red-600">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-red-600">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
