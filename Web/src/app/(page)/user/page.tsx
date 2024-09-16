"use client";
import Navbar from "@/components/1.Header/Navbar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserPage() {
  // const params = useParams<any>();
  // const userid = params.any; // get the user id from
  // if (!userid) {
  //   return <h1>Not logged in</h1>;
  // }
  const [userData, setUserData] = useState<any>({ data: [] });
  const eventGetter = async () => {
    try {
      const res = await fetch(`http://localhost:8069/api/v1/users/profile`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const resData = await res.json();
      setUserData(resData);
      console.log(resData.data);
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
      <section className=" w-full h-screen flex  justify-center items-center font-bold  bg-gradient-to-b from-black to-red-700/90">
        <div className="flex w-7/12 h-fit rounded-3xl bg-white">
          <div className="w-[250rem] p-10">
            <h1 className="font-extrabold">
              Username:{" "}
              <span className="font-light">{userData?.data?.username}</span>
            </h1>

            <h1 className="mt-2">
              Email: <span className="font-light">{userData?.data?.email}</span>{" "}
            </h1>

            <h1 className="mt-2">
              Referral Code:{" "}
              <span className="font-light">
                {userData?.data?.referralCode?.value}
              </span>
            </h1>

            <div className="mt-10 border border-gray-300 rounded-lg p-5">
              <h2 className="font-semibold">Wallet Info</h2>
              <div className="flex items-center space-x-2">
                <p>Balance:</p>
                <p>a</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <p>Redeemed Points:</p>
                <p>a</p>
              </div>
            </div>

            {/* <div className="mt-5 border border-gray-300 rounded-lg p-5">
              <h2 className="font-semibold">Point Info</h2>
              <div className="flex items-center space-x-2">
                <p>Total Points:</p>
                <p>50.000</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <p>Redeemed Points:</p>
                <p>a</p>
              </div>
            </div> */}
            {/* Break-Button */}
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
