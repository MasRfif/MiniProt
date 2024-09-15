import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/1.Header/Navbar";
import HomeCrls from "@/components/2.Body/HomeCarousel";
import Testimonial from "@/components/2.Body/Testimonies";
import HeroCar from "../Asset/autoplayHomeHero";

export default function HeroHome() {
  return (
    <>
      <main>
        <section>
          <div
            className="hero min-h-screen  "
            style={{
              backgroundImage: "url(bg.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 min-xl:w-fit w-full h-full  bg-gradient-to-l from-black/0 to-black/90">
              {" "}
              <section className="flex sm:p-8  w-full h-full justify-between">
                <div className=" flex flex-col  items-start justify-center text-white w-full h-full  top-96  p-10 ">
                  <h1 className="text-4xl font-bold mb-4 font-fira-sans">
                    Welcome to Our Website FIRST_NAME !
                  </h1>
                  <p className="text-lg xs:text-base  mb-8 sm:w-[38rem] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, porro voluptas. Non consectetur voluptas iure
                    obcaecati. Veritatis laborum consequatur, cumque repellendus
                    rem tempore, expedita ullam aliquid laudantium velit
                    dignissimos magnam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Labore deleniti, nostrum temporibus
                    nesciunt aut et pariatur veritatis obcaecati fugit odio
                    eligendi iste excepturi quia, modi quibusdam vero asperiores
                    hic? Asperiores?
                  </p>
                  <button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
                    Get Started
                  </button>
                </div>
                <HeroCar />
              </section>
            </div>
          </div>
        </section>
        <HomeCrls />
        <Testimonial />
      </main>
    </>
  );
}
