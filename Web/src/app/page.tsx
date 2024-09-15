import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Asset/Logo";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-screen bg-cover"
        style={{ backgroundImage: "url(./LandingPage.jpg)" }}
      >
        <div>
          <div className="absolute w-full h-screen bg-gradient-to-r from-black/55 to-red-800/90" />
          <div className="flex flex-col md:flex-row justify-between z-40 items-center w-full h-full text-center">
            <div className="text-2xl md:text-4xl z-40 font-bold text-white">
              <div className="w-full h-full px-5 md:pl-10 flex justify-start items-center">
                <div className="text-left">
                  <h1 className="text-4xl md:text-6xl pb-4 font-extrabold">
                    Welcome To
                  </h1>
                  <div className="flex items-center">
                    <span className="text-4xl md:text-6xl font-bold">
                      Event
                    </span>
                    <Logo className="mx-3" />
                    <span className="text-4xl md:text-6xl font-bold">
                      Occasion
                    </span>
                  </div>
                  <p className="text-sm md:text-lg pt-10 font-light">
                    Welcome to Evnet Occasion, your ultimate destination for
                    finding exciting Japanese events across Indonesia. Whether
                    you are a fan of traditional festivals, modern pop culture,
                    or culinary delights, we bring you the best Japanese-themed
                    experiences happening near you. Explore our curated list of
                    events, including cultural festivals, concerts, food fairs,
                    workshops, and more. Whether you are seeking to immerse
                    yourself in authentic Japanese traditions or indulge in the
                    latest trends, our platform helps you connect with the
                    vibrant Japanese community in Indonesia. Join us today and
                    never miss out on your favorite Japanese events!
                  </p>
                  <Link className="btn bg-gray-700 my-10" href={"/home"}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            {/* Hidden on mobile, only visible on larger screens */}
            <div className="hidden lg:block z-40">
              <div className="w-[30rem] h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
