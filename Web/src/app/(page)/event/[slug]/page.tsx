"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "@/components/1.Header/Navbar";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const params = useParams<any>();
  const eventid = params.slug; // get the event id from url
  if (!eventid) {
    return <h1>No eventid provided</h1>;
  }
  const [eventData, setEventData] = useState<any>({ data: [] });
  const eventGetter = async () => {
    try {
      const res = await fetch(
        `http://localhost:8069/api/v1/events/${eventid}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const resData = await res.json();
      setEventData(resData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    eventGetter();
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-base-200">
        {" "}
        <section className="flex pt-24 w-full justify-center  max-md:p-10">
          <div className="flex w-[90rem] rounded-xl h-96 justify-center bg-cover bg-center md:w-[50rem] lg:w-[70rem] ">
            <Image
              src={eventData?.message?.imageUrl || ""}
              alt="Image of event venue"
              width={600}
              height={600}
            />
          </div>
        </section>
        <section className="flex justify-center p-10 md:flex-coll lg:flex-col max-xl:flex-col">
          <div className=" w-[50rem] s:w-96 md:w-full lg:w-full xl:w-full">
            <div>
              <h1 className="text-2xl font-bold text-white">Event Time</h1>
              <div className="flex p-4 items-center mt-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-sm text-white">
                  {eventData?.message?.datetime
                    ? new Date(eventData?.message?.datetime).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : ""}{" "}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">Event Location</h1>
              <div className="flex p-4 items-center mt-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-sm text-white">
                  {eventData?.message?.location}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">Event Type</h1>
              <div className="flex p-4 items-center mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a2 2 0 012-2z"
                  />
                </svg>
                <span className="ml-2 text-sm text-white">
                  {eventData?.message?.isPaid ? "PAID" : "FREE"}
                </span>
              </div>
            </div>
            <div className="s:h-96 s:w-96 sm:w-[40rem] md:w-full lg:w-full xl:w-full overflow-hidden overflow-y-auto">
              <h2 className="text-2xl font-bold sticky top-0 bg-base-200 w-full h-10 text-white">
                {eventData?.message?.eventName}
              </h2>
              <p className="text-white p-5 s:w-96 sm:w-[40rem]  md:w-full lg:w-full xl:w-full">
                {eventData?.message?.description}
              </p>
            </div>
          </div>
          <div className="flex w-96 pt-10 pr-10 justify-center md:w-full lg:w-full xl:w-full ">
            <div className="w-96  md:w-full lg:w-full xl:w-96 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
              <div className="text-2xl font-bold text-gray-800">
                Ticket Price
              </div>
              <div className="mt-4 text-lg text-gray-600">
                Rp.{eventData?.message?.price},00
              </div>
              <Link href="/home" className="p-5">
                <button className="mt-8 px-4 py-2 text-white bg-slate-700 outline outline-2 outline-red-700 rounded-btn">
                  Buy Ticket
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
