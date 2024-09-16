"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroStatic = () => {
  return (
    <div className="flex max-s:hidden max-md:hidden justify-center items-center text-white w-full h-full">
      <div className="carousel  max-[768px]:hidden  max-w-[50rem]  carousel-end rounded-box">
        <div className="carousel-item px-50 gap-5  ">
          <div className="card lg:card-side  bg-red-900 shadow-xl">
            <figure>
              <Image
                src="/port_street.jpg"
                alt="HeroPage"
                width={600}
                height={600}
                className="object-cover w-[400px] h-[500px]"
              />
            </figure>
            <div className="card-body w-96">
              <h2 className="card-title">
                Exciting Announcements and Updates
                <div className="badge badge-secondary font-fira-sans">NEW</div>
              </h2>

              <p>
                Stay up-to-date with the latest happenings, event announcements,
                and exclusive updates from NihonFest Events. Whether it’s new
                event launches, special guest appearances, or behind-the-scenes
                insights, this is where you’ll find all the freshest
                information.
              </p>
              <div className="card-actions justify-end">
                <Link href="/help">
                  <button className="btn badge bg-slate-700 outline outline-2 outline-red-700 text-white">
                    Help
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroStatic;
