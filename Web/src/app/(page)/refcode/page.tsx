"use client";
import Image from "next/image";
import Background from "@/components/2.Body/Background";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { error } from "console";

export default function refCode() {
  const [refCode, setRefCode] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = { refCode };

    try {
      const res = await fetch("http://localhost:8069/api/v1/refcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      //console.log(res);
      if (res.ok) {
        router.push("/user");
        router.refresh();
      } else {
        alert("Invalid Code!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section
        id="hero"
        className="w-full h-screen self-center overflow-hidden bg-black"
      >
        {" "}
        <section className="w-full h-full flex justify-center items-center font-bold rounded-r-3xl bg-gradient-to-l from-black/0 to-red-700/90">
          <Background />
          <div className="bg-white backdrop-filter backdrop-blur-sm rounded-3xl  flex-col top-0  items-center justify-center p-9 w-[450px] h-96">
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold mb-6 text-black ">Sign In</h1>

              <div className="mb-4">
                <div className="w-[380px]">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-black font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-2 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      type="text"
                      name="refcode"
                      value={refCode}
                      onChange={(e) => setRefCode(e.target.value)}
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black  peer-focus:text-black before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Enter Referral Code (if you have one)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-yellow-950"
                  href="/home"
                >
                  Skip
                </Link>
              </div>
              <div className="mt-4">
                <button
                  className="bg-red-900 hover:text-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" //"button"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
