"use client";

import React, { useState } from "react";

export default function AdminPg() {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    date: "",
    time: "",
    location: "",
    availableSeat: "",
    eventTypeId: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="flex w-full h-screen justify-center items-center bg-gradient-to-t from-black to-red-700/90">
        <div className="justify-center w-[80rem] h-fit rounded-xl bg-white">
          <div className="p-10 w-full ">
            <h1 className="text-3xl font-semibold">Create Event</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="eventName"
                  placeholder="Event Name"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="number"
                  name="availableSeat"
                  placeholder="Available Seats"
                  value={formData.availableSeat}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <input
                  type="text"
                  name="eventTypeId"
                  placeholder="Event Type ID"
                  value={formData.eventTypeId}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded-md"
                />
                <div className="label font-bold pb-4">
                  <span className="label-text text-2xl ">
                    Add Your Event-Photo
                  </span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-ghost w-full max-w-xs"
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
