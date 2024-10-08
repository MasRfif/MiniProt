"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "John Doe",
      role: "USA",
      quote:
        "Attending the anime event was an absolute blast! From the moment I walked in, I was immersed in a world of incredible cosplay, engaging panels, and enthusiastic fans. The guest speakers were amazing, and the energy was electric. I especially loved the cosplay contest—seeing so many creative interpretations of my favorite characters was a highlight. I can’t wait for next year’s event!",
      rating: 10,
    },
    {
      name: "Jane Smith",
      role: "UK",
      quote:
        "This anime event exceeded all my expectations! The variety of activities and the quality of the panels were fantastic. I had the chance to meet some of my favorite voice actors and even participated in a few workshops. The venue was well-organized, and the staff were friendly and helpful. It was great to be surrounded by fellow anime lovers and share our passion. Highly recommended for anyone who loves anime!",
      rating: 4,
    },
    {
      name: "David Lee",
      role: "France",
      quote:
        "What an incredible experience! The anime event was a perfect blend of fun and fandom. The exhibit halls were filled with unique merchandise and artwork, and the themed photo booths were a great touch. I was impressed by the range of programming, from Q&A sessions with industry professionals to interactive fan activities. It was a wonderful chance to connect with others who share my love for anime. Can’t wait for next year!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <Image
            className="w-12 h-12 rounded-full mr-3"
            src="/test1.jpeg"
            alt={testimonials[currentTestimonial].name}
            width={600}
            height={600}
          />
          <div>
            <h3 className="text-lg font-bold">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-500">
              {testimonials[currentTestimonial].role}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-center mb-4">
          {testimonials[currentTestimonial].quote}
        </p>
        <div className="flex items-center mb-4">
          {[...Array(testimonials[currentTestimonial].rating)].map(
            (_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.532.587l1.519 4.674c.3.921-.755 1.688-1.536 1.118l-3.025-2.174a1 1 0 00-.95-.69h-4.915a1 1 0 00-.95.69l-3.025 2.174c-.781.57-1.838-.197-1.536-1.118l1.518-4.674c.162-.327.563-.587 1.532-.587h4.915a1 1 0 00.95-.69l1.518-4.674z"
                />
              </svg>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
