import Link from "next/link";
import HeroStatic from "../Asset/StaticHomeCard";

export default function HeroHome() {
  return (
    <>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(bg.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 min-xl:w-fit w-full h-full  bg-gradient-to-l from-black/0 to-black/90">
            {" "}
            <section className="flex sm:p-8  w-full h-full justify-between">
              <div className=" flex flex-col  items-start justify-center text-white w-full h-full  top-96  p-10 ">
                <h1 className="text-4xl font-bold mb-4 font-fira-sans">
                  Welcome to Ocassion Events—your ultimate destination for all
                  things Japan and anime! 🎌✨
                </h1>
                <p className="text-lg xs:text-base  mb-8 sm:w-[38rem] ">
                  Get ready to dive into the vibrant world of Japanese culture,
                  from electrifying anime conventions to captivating cultural
                  festivals. Whether you're a die-hard otaku, a fan of
                  traditional Japanese arts, or just curious about what Japan
                  has to offer, we've got you covered! Explore our exciting
                  lineup of events, secure your tickets with ease, and join a
                  community of enthusiasts who share your passion. From
                  exclusive screenings and cosplay contests to immersive
                  workshops and meet-and-greets with your favorite creators,
                  there’s always something thrilling happening at NihonFest.
                  Welcome aboard, and get ready for an unforgettable experience!
                  For any questions or support, our team is here to help. Let
                  the adventure begin! 🚀🌸
                </p>
                <button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
                  <Link href={"/events"}>Explore</Link>
                </button>
              </div>
              <HeroStatic />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
