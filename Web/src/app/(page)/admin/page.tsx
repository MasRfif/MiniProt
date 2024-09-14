"use client";

import React, { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [formData, setFormData] = useState<any>({
    eventName: "",
    description: "",
    datetime: "",
    location: "",
    availableSeat: "",
    isPaid: "",
    price: 0,
    eventPhoto: "",
  });

  const [isFreeEvent, setIsFreeEvent] = useState(true);
  const router = useRouter();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    if ((event.target as HTMLInputElement).files) {
      const files = (event.target as HTMLInputElement).files;
      setFormData({ ...formData, [name]: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEventTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isPaid = event.target.value;
    setFormData({ ...formData, isPaid });
    setIsFreeEvent(isPaid === "free"); // Update isFreeEvent based on the selected value
    if (isPaid === "free") {
      setFormData({ ...formData, price: 0, isPaid });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("eventName", formData.eventName);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("datetime", formData.datetime);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("availableSeat", formData.availableSeat);
    formDataToSend.append("isPaid", formData.isPaid);
    formDataToSend.append("price", formData.price);

    // Append the file if it's available
    if (formData.eventPhoto) {
      formDataToSend.append("image", formData.eventPhoto);
    }

    try {
      const res = await fetch("http://localhost:8069/api/v1/events", {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });

      console.log(res);

      // router.push("/");
      // router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="flex w-full h-screen justify-center items-center bg-gradient-to-t from-black to-red-700/90">
        <div className="justify-center w-[80rem] h-fit rounded-xl bg-white">
          <div className="p-10 w-full ">
            <h1 className="text-3xl font-semibold">Create Event</h1>
            <form onSubmit={handleSubmit}>
              {/* Break */}

              <div className="flex flex-col gap-4">
                {/* Break */}

                <div className="mt-3 ">
                  <legend>Event Name</legend>
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-md w-96 flex"
                  />
                </div>

                {/* Break */}

                <div>
                  <legend> Description Event</legend>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-md w-96 flex "
                  ></textarea>
                  {/* <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md flex w-96 " /> */}
                </div>

                {/* Break */}

                <div>
                  <legend>
                    <h1>Place & Location</h1>
                  </legend>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 
                  rounded-md w-96 flex"
                  />
                </div>

                {/* Break */}

                <div>
                  <legend>Date & Time Event</legend>
                  <input
                    type="datetime-local"
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded-md w-96 flex"
                  />
                </div>

                {/* Break */}

                <div>
                  <legend>Available Seat</legend>
                  <input
                    type="number"
                    name="availableSeat"
                    value={formData.availableSeat}
                    onChange={handleInputChange}
                    className="border 
                  border-gray-300 p-2 rounded-md w-96 flex"
                  />
                </div>

                {/* Break */}

                <div>
                  <legend>Type event</legend>
                  <span className="flex">
                    <input
                      type="radio"
                      name="isPaid"
                      value="free"
                      onChange={handleEventTypeChange}
                      className="border 
                  border-gray-300 p-2 rounded-md "
                    />{" "}
                    <h4 className="mx-3">Free</h4>
                  </span>

                  {/* Break */}

                  <span className="flex">
                    <input
                      type="radio"
                      name="isPaid"
                      value="paid"
                      onChange={handleEventTypeChange}
                      className="border 
                  border-gray-300 p-2 rounded-md"
                    />{" "}
                    <h4 className="mx-3">Not Free</h4>
                  </span>
                </div>

                {/* Break */}

                {/* Conditionally render the price field */}
                {!isFreeEvent && (
                  <div>
                    <legend>Event Price</legend>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-2 rounded-md w-96 flex"
                    />
                  </div>
                )}

                {/* Break */}

                <div className="label font-bold pb-4">
                  <span className="label-text text-2xl ">
                    Add Your Event-Photo
                  </span>
                </div>

                <input
                  type="file"
                  name="eventPhoto"
                  className="file-input file-input-ghost w-full max-w-xs"
                  onChange={handleInputChange}
                />

                <button
                  type="submit"
                  className="bg-slate-700 outline outline-2 outline-red-700 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
