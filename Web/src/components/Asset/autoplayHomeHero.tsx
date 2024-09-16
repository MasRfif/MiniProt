"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroCar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesFood = useMemo(
    () => [
      "/port_street.jpg",
      "/port_jp.jpg",
      "/port_street.jpg",
      "/port_jp.jpg",
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imagesFood.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesFood.length]);

  return (
    <div className="flex max-s:hidden max-md:hidden justify-center items-center text-white w-full h-full">
      <div className="carousel  max-[768px]:hidden  max-w-[50rem]  carousel-end rounded-box">
        <div className="carousel-item px-50 gap-5  ">
          {imagesFood.map((image, index) => (
            <div
              key={index}
              className="card lg:card-side  bg-red-900 shadow-xl"
              style={{
                transform: `translateX(-${currentIndex * 102}%)`,
              }}
            >
              <figure>
                <Image
                  src={image}
                  alt="HeroPage"
                  width={600}
                  height={600}
                  className="object-cover w-[400px] h-[500px]"
                />
              </figure>
              <div className="card-body w-96">
                <h2 className="card-title">
                  Event name
                  <div className="badge badge-secondary font-fira-sans">
                    NEW
                  </div>
                </h2>

                <p>
                  Event description Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Molestiae cum numquam quaerat corrupti,
                  exercitationem incidunt alias, tenetur ea quod beatae minus
                  labore obcaecati odit. Corrupti, non ut! Eveniet, aliquid
                  autem!
                </p>
                <div className="card-actions justify-end">
                  <Link href="/event">
                    <button className="btn badge bg-slate-700 outline outline-2 outline-red-700 text-white">
                      Event Button
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroCar;
