"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function NotFound() {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(5);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timerId);
        router.push("/Home");
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [remainingTime, router]);

  return (
    <>
      <div className="flex justify-center items-center h-screen p-24">
        <div className="flex flex-col items-center">
          <h1 className="text-center relative text-xl">
            what are you Searching m8 ? <br />
            here a <b className="text-9xl">404</b> for you
            <br />
            you will Be sent to to Spawn in : {remainingTime}
          </h1>

          {/* <Image
            className="mx-auto mt-4 rounded-xl"
            src="https://media.tenor.com/hUBXfYvvOlUAAAAC/sus-suspicious.gif"
            alt="what the dog doin"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </>
  );
}
