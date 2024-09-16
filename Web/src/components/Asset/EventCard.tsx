"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EventCard() {
  const [eventData, setEventData] = useState<any>({ data: [] });
  const eventGetter = async (page = 1) => {
    try {
      const res = await fetch(
        `http://localhost:8069/api/v1/events?page=${page}`,
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
      <div className="py-8">
        <button
          className="btn btn-block bg-red-900/90 text-white justify-center"
          onClick={() => {
            const page = eventData?.meta?.currentPage;
            const totalPage = eventData?.meta?.totalPages;
            eventGetter(page == totalPage ? 1 : page + 1);
          }}
        >
          Next
        </button>
      </div>
      {/* break */}
      <div className="grid grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 gap-4 items-center justify-center">
        {/* break */}
        {(eventData as any)?.data?.map((e: any) => (
          <Link href={`/event/${e.id}`} key={e.id}>
            <div className="carousel-item ">
              <div className="card bg-base-100 w-96 h-96 shadow-xl">
                <figure className="h-48">
                  <Image
                    src={e.imageUrl || ""}
                    alt="Image of event venue"
                    width={600}
                    height={600}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {e.eventName}
                    <div className="badge badge-secondary">
                      {e.isPaid ? `Rp.${e.price},00` : "FREE"}
                    </div>
                  </h2>
                  <p className="text-sm">{e.location}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <p className="text-sm">
                        {e.datetime
                          ? new Date(e.datetime).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : ""}{" "}
                      </p>
                    </div>
                    {/* <div className="badge badge-outline">{e.availableSeat}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* break */}
    </>
  );
}
