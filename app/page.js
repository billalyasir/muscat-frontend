import LogBrandContent from "@/components/homepage/logobrandcontent";
import Banner from "@/components/homepage/banner";
import React from "react";
import HowWeWork from "@/components/homepage/howwework";
import backend from "@/api";
import Stepper from "@/components/homepage/Stepper";
import Image from "next/image";
const Home = async () => {
  return (
    <div className="grid gap-6 relative  ">
      <div className="absolute md:top-12 top-32 left-12">
        <Image
          src="https://res.cloudinary.com/dkrobqcdn/image/upload/v1707182152/mdqvgo1egccp0oogoatr.png"
          width={200}
          height={200}
          alt="bg-img"
        />
      </div>
      <div className="absolute md:top-12 top-32 right-12">
        <Image
          src="https://res.cloudinary.com/dkrobqcdn/image/upload/v1707182152/mdqvgo1egccp0oogoatr.png"
          width={200}
          height={200}
          alt="bg-img"
        />
      </div>
      <Banner />
      <Stepper />
      <HowWeWork />
      <LogBrandContent />
    </div>
  );
};

export default Home;
