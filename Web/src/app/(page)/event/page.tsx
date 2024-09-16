import Navbar from "@/components/1.Header/Navbar";
import HeroEventPage from "@/components/Asset/HeroEventPage";
import AllEventCard from "@/components/Asset/AllEventCard";
export default function Event() {
  return (
    <>
      <Navbar />
      <HeroEventPage />
      <div className=" bg-base-200 min-h-screen ">
        <div className="hero-content ">
          <div className=" text-white w-full h-full">
            <div className="p-10">
              <h1 className="text-5xl font-bold">Discover our events</h1>
              <p className="text-lg">
                Discover our upcoming events, curated by our team.
              </p>
            </div>

            {/* <div className="carousel  max-[768px]:w-[45rem] max-[768px]:gap-10  gap-20 max-w-[113rem]   max-s:max-w-[24rem] max-s:mx-auto carousel-end rounded-box"> */}
            <div className="grid grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 gap-4 items-center justify-center">
              {/* break */}
              <AllEventCard />
              {/* break */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
