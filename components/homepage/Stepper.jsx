import { Calendar, FilesIcon, Hand, HandHeart } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

const Stepper = () => {
  return (
    <div className="min-h-[300px] rounded-md  px-2 flex items-center contents-center justify-center">
      <div>
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-black">
          This is How We Work
        </h1>
        <hr className=" my-4" />
        <div className="grid mt-4 sm:grid-cols-2  lg:grid-cols-4 gap-3">
          <Card className="m-auto bg-[#fff] rounded-md text-[#222] py-3 px-4 text-center flex contents-center justify-center items-center">
            <div className=" space-y-2 ">
              <FilesIcon className="text-center m-auto w-12 h-12" />
              <p className="text-2xl font-semibold">Appointment</p>
              <p className="text-[#222] ">
                Contact Us, through WhatsApp or Phone Call.
              </p>
            </div>
          </Card>
          <Card className="m-auto bg-[#fff] rounded-md text-[#222] py-3 px-4 text-center flex contents-center justify-center items-center">
            <div className=" space-y-2 ">
              <Calendar className="text-center m-auto w-12 h-12" />
              <p className="text-2xl font-semibold">Choose Date</p>
              <p className="text-[#222] ">
                Your convenient time Day and, Preferable, Date.{" "}
              </p>
            </div>
          </Card>
          <Card className="m-auto bg-[#fff] rounded-md text-[#222] py-3 px-4 text-center flex contents-center justify-center items-center">
            <div className=" space-y-2 ">
              <Hand className="text-center m-auto w-12 h-12" />
              <p className="text-2xl font-semibold">Cleaning Process</p>
              <p className="text-[#222] ">
                We start our, working, process for cleaning your things!.
              </p>
            </div>
          </Card>
          <Card className="m-auto bg-[#fff] rounded-md text-[#222] py-3 px-4 text-center flex contents-center justify-center items-center">
            <div className=" space-y-2 ">
              <HandHeart className="text-center m-auto w-12 h-12" />
              <p className="text-2xl font-semibold">Final Result</p>
              <p className="text-[#222] ">
                Your happiness is our full of satisfaction and joy.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
