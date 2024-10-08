"use client";
import EventCard from "../Asset/EventCard";

export default function HomeCrls() {
  return (
    <div className=" bg-base-200 min-h-screen ">
      <div className="hero-content">
        <div className=" text-white w-full h-full">
          <div className="p-10">
            <h1 className="text-5xl font-bold">Discover our events</h1>
            <p className="text-lg">
              Discover our upcoming events, curated by our team.
            </p>
          </div>

          {/* <div className="carousel  max-[768px]:w-[45rem] max-[768px]:gap-10  gap-20 max-w-[113rem]   max-s:max-w-[24rem] max-s:mx-auto carousel-end rounded-box"> */}
          {/* break */}
          <EventCard />
          {/* break */}
        </div>
      </div>
    </div>
  );
}
