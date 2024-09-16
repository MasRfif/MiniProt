"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllEventCard() {
  const [eventData, setEventData] = useState({ data: [] });
  const eventGetter = async () => {
    try {
      const res = await fetch("http://localhost:8069/api/v1/events/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

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
      {/* break */}
    </>
  );
}
