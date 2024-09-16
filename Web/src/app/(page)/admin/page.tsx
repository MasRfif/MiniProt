"use client";

import React, { useState } from "react";
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if ((event.target as HTMLInputElement).files) {
      const files = (event.target as HTMLInputElement).files;
      setFormData({ ...formData, [name]: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEventTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isPaid = event.target.value;
    setFormData({ ...formData, isPaid });
    setIsFreeEvent(isPaid === "free");
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="flex w-full h-screen justify-center items-center bg-gradient-to-t from-black to-red-700/90">
        <div className="card bg-white shadow-xl max-w-[calc(100%-40px)]">
          <div className="card-body p-6">
            <h2 className="card-title text-lg font-semibold mb-4">Create Event</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Event Name */}
              <div>
                <legend className="text-sm">Event Name</legend>
                <input type="text" name="eventName" value={formData.eventName} onChange={handleInputChange} className="input input-bordered w-full text-white" />
              </div>

              {/* Description */}
              <div>
                <legend className="text-sm">Description Event</legend>
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="textarea textarea-bordered w-full text-white"></textarea>
              </div>

              {/* Location */}
              <div>
                <legend className="text-sm">Place & Location</legend>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="input input-bordered w-full text-white" />
              </div>

              {/* Date & Time */}
              <div>
                <legend className="text-sm">Date & Time Event</legend>
                <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleInputChange} className="input input-bordered w-full text-white" />
              </div>

              {/* Available Seats */}
              <div>
                <legend className="text-sm">Available Seat</legend>
                <input type="number" name="availableSeat" value={formData.availableSeat} onChange={handleInputChange} className="input input-bordered w-full text-white" />
              </div>

              {/* Event Type */}
              <div>
                <legend className="text-sm">Type Event</legend>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="isPaid" value="free" onChange={handleEventTypeChange} className="radio" />
                    <span className="ml-2">Free</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="isPaid" value="paid" onChange={handleEventTypeChange} className="radio " />
                    <span className="ml-2">Paid</span>
                  </label>
                </div>
              </div>

              {/* Price Field (Conditionally Rendered) */}
              {!isFreeEvent && (
                <div>
                  <legend className="text-sm">Event Price</legend>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} className="input input-bordered w-full text-white" />
                </div>
              )}

              {/* Event Photo */}
              <div className="mt-4">
                <legend className="text-sm">Add Your Event Photo</legend>
                <input type="file" name="eventPhoto" onChange={handleInputChange} className="file-input file-input-bordered w-full text-white" />
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end mt-4">
                <button type="submit" className="btn btn-primary w-full">
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
