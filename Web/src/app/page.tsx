import Image from "next/image";

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
                  <p className="text-lg pt-10 font-light">
                    Welcome to [Your Website Name], your ultimate destination
                    for finding exciting Japanese events across Indonesia.
                    Whether you're a fan of traditional festivals, modern pop
                    culture, or culinary delights, we bring you the best
                    Japanese-themed experiences happening near you. Explore our
                    curated list of events, including cultural festivals,
                    concerts, food fairs, workshops, and more. Whether youre
                    seeking to immerse yourself in authentic Japanese traditions
                    or indulge in the latest trends, our platform helps you
                    connect with the vibrant Japanese community in Indonesia.
                    Join us today and never miss out on your favorite Japanese
                    events!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-40">
            <div className="w-[60rem] h-screen "></div>
          </div>
        </div>
      </section>
    </>
  );
}
