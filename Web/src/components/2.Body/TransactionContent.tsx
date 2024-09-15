"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import NotFound from "@/app/not-found";
export default function TransactionPage() {
  const params = useParams<any>();
  const eventid = params.slug; // get the ticket id from url
  if (!eventid) {
    return <h1>no eventid provided</h1>;
  }
  const [promoCode, setPromoCode] = useState("");

  const handlePromoCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromoCode = () => {
    // Implement logic to apply promo code
    console.log("Promo code applied:", promoCode);
  };
  const router = useRouter();
  const [eventData, setEventData] = useState<any>({});
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

      if (res.ok) {
        const resData = await res.json();
        setEventData(resData);
      } else {
        router.push("/what_are_you_searching?");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    eventGetter();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Checkout Event Ticket
        </h1>

        <div className="mb-4">
          {/* <h2 className="text-lg font-semibold text-gray-700 mb-2">Payment Method</h2> */}
          {/* <p className="text-gray-600">Visa</p>
          <p className="text-gray-600">**** **** **** 4243</p> */}
          <legend> Event Ticket </legend>
          <h3>{eventData?.message?.eventName}</h3>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Have a Promo Code?
          </h2>
          <div className="flex">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={promoCode}
              onChange={handlePromoCodeChange}
            />
            <button
              className="bg-slate-700 outline outline-2 outline-red-700 text-white font-bold py-2 px-4 rounded-md ml-2"
              onClick={handleApplyPromoCode}
            >
              Apply
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Payment</h2>
          <div className="flex justify-between">
            <p className="text-gray-600">Subtotal:</p>
            <p className="text-gray-600">$00.00</p>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-700">
            {eventData?.message?.price}
          </h2>
          <button className="bg-slate-700 outline outline-2 outline-red-700 text-white font-bold py-2 px-4 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
