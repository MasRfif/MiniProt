import Image from "next/image";
import "animate.css";
import Link from "next/link";
import Logo from "@/components/Asset/Logo";
export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-screen bg-cover   "
        style={{ backgroundImage: "url(./LandingPage.jpg)" }}
      >
        <div className="absolute  w-full h-screen bg-gradient-to-r from-black/55 to-red-800/90" />
        <div className="flex flex-row justify-between z-40 items-center  w-full h-full  text-center">
          <div className="text-4xl  z-40 font-bold  text-white">
            <div className="w-[55rem] h-screen  rounded-r-[400px]">
              <div className="w-full h-full pl-10 flex justify-start items-center">
                <div className="text-left">
                  <h1 className="text-6xl pb-4 font-extrabold">Welcome To</h1>
                  <div className="flex items-center">
                    <span className="text-6xl  font-bold ">Project</span>
                    <Logo className="mx-3" />
                    <span className="text-6xl font-bold">Occasion</span>
                  </div>
                  <p className="text-lg pt-10 font-light ">
                    Welcome to ProjectOccasion, your ultimate destination for
                    finding exciting Japanese events across Indonesia. Whether
                    youre a fan of traditional festivals, modern pop culture, or
                    culinary delights, we bring you the best Japanese-themed
                    experiences happening near you. Explore our curated list of
                    events, including cultural festivals, concerts, food fairs,
                    workshops, and more. Whether youre seeking to immerse
                    yourself in authentic Japanese traditions or indulge in the
                    latest trends, our platform helps you connect with the
                    vibrant Japanese community in Indonesia. Join us today and
                    never miss out on your favorite Japanese events!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-40">
            <div className="flex justify-center  items-center w-[60rem] h-screen">
              <div className=" w-96 h-96 py-60 animate__animated animate__fadeInDownBig  ">
                <Link
                  href={"/Home"}
                  className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-[#fddaab] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#bd1818] group "
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#473c3c] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-[#000000]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-[#bd1818]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    <span className="block group-hover:hidden">
                      are you ready ?
                    </span>
                    <span className="hidden group-hover:block">
                      lets get started !
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
