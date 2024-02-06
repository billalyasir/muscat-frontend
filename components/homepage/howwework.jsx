"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const HowWeWork = () => {
  return (
    <div className="grid py-16 gap-4 lg:grid-cols-2">
      <div className="h-[60vh] lg:h-auto">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://youtu.be/P5CX1fyq3n0"
          controls={true}
        />
      </div>
      <div>
        <div>
          <h1 className="md:text-2xl text-xl lg:text-4xl font-bold text-left text-green-500 mb-6">
            🌟 Welcome to Muscatclean 🌟
          </h1>
          <hr className="my-2" />
          <p className="text-lg text-gray-800 mb-6">
            At Muscatclean, we bring the magic of cleanliness to your doorstep
            in the heart of Muscat, Oman. Our dedicated cleaning team is here to
            ensure that every nook and cranny of your space sparkles with
            freshness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Work Process Steps */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                💼 Our Work Process
              </h2>

              <ul className="list-disc pl-4">
                <li>Scheduling Made Simple</li>
                <li>Tailored Cleaning Solutions</li>
                <li>Seamless Communication</li>
                <li>Swift Arrival &amp; Setup</li>
                <li>Thorough Cleaning Process</li>
                <li>Quality Assurance</li>
                <li>Eco-Friendly Commitment</li>
                <li>Customer Feedback Loop</li>
              </ul>
            </div>
            {/* Booking Information */}
            <div className="p-4 col-span-2 md:col-span-1">
              <h2 className="text-xl font-semibold mb-2">📅 Ready to Book?</h2>
              <p className="text-gray-800 mb-4">
                Easily book your cleaning service with Muscatclean through our
                user-friendly online platform. Select a convenient date and time
                that suits your schedule, and leave the rest to us.
              </p>
              <Link
                href="https://wa.me/+6590524750"
                className="bg-green-500 text-white py-2 px-4 rounded-full inline-block hover:bg-green-600"
              >
                Book Now
              </Link>
            </div>
          </div>
          {/* Footer Section */}
          <p className="text-left text-gray-600 text-sm">
            🌺 Ready to experience the joy of a clean and inviting space? Book
            your cleaning service with Muscatclean today, and let us transform
            your surroundings into a haven of freshness and hygiene! 🌺
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
