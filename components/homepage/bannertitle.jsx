"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo/logo-final.png";
import { Button } from "../ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
const BannerTitle = () => {
  return (
    <div>
      <div className="sm:min-h-[50vh] relative shadow-lg py-8 sm:py-0 rounded-md mb-4 w-full bg-gray-400/50 realtive  bg-clip-padding backdrop-filter backdrop-blur-md sm:backdrop-blue-sm bg-opacity-10 border border-gray-100 flex items-center contents-center justify-center">
        <div className="absolute top-[-16px]">
          <Link className="z-[999]" href="tel:+968-9722-8463">
            <Button className="flex gap-2 rounded-full">
              {" "}
              <PhoneCall /> +968 9722 8463
            </Button>
          </Link>
        </div>
        <div className=" z-10 space-y-3">
          <Link href="/">
            <Image
              src={Logo.src}
              className="text-center m-auto"
              width={200}
              height={200}
              alt="logo"
            />
          </Link>
          <h1 className=" z-50 mb-0 font-bold sm:text-2xl md:text-3xl mx-2  text-center text-black text-[20px] sm:text-left">
            Sparkling Clean Spaces in Muscat, Oman - Your Trusted Cleaning
            Partner!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
