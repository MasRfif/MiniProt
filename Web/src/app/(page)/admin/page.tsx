"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPg() {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    date: "",
    time: "",
    location: "",
    availableSeat: "",
    eventTypeId: "",
    eventPhoto: "",
  });
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("eventName", formData.eventName);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("availableSeat", formData.availableSeat);
    formDataToSend.append("eventTypeId", formData.eventTypeId);

    // Append the file if it's available
    if (formData.eventPhoto) {
      formDataToSend.append("eventPhoto", formData.eventPhoto);
    }

    try {
      const res = await fetch("http://localhost:8069/api/v1/events", {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });

      console.log(res);

      router.push("/");
      router.refresh();
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
              <div className="flex flex-col gap-4">
                <input type="text" name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md" />

                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md" />

                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md" />

                <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md" />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 
                  rounded-md"
                />

                <input
                  type="number"
                  name="availableSeat"
                  placeholder="Available Seats"
                  value={formData.availableSeat}
                  onChange={handleInputChange}
                  className="border 
                  border-gray-300 p-2 rounded-md"
                />

                <input
                  type="text"
                  name="eventTypeId"
                  placeholder="Event Type ID"
                  value={formData.eventTypeId}
                  onChange={handleInputChange}
                  className="border 
                  border-gray-300 p-2 rounded-md"
                />

                <div className="label font-bold pb-4">
                  <span className="label-text text-2xl ">Add Your Event-Photo</span>
                </div>

                <input type="file" name="eventPhoto" className="file-input file-input-ghost w-full max-w-xs" />

                <button type="submit" className="bg-slate-700 outline outline-2 outline-red-700 text-white px-4 py-2 rounded-md">
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
