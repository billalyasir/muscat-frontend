import React, { Suspense } from "react";

import Image from "next/image";
import image1 from "../../public/imges/image1.jpg";
import BannerTitle from "./bannertitle";
import Link from "next/link";
import backend from "@/api";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Loading from "./Loading";
async function getData() {
  const res = await fetch(`${backend}/api/service`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    console.log("something went wrong");
  }
  return res.json();
}
const ServicCard = async () => {
  const datas = await getData();
  return (
    <>
      <div>
        <BannerTitle />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<Loading />}>
          {datas?.map((service) => (
            <Link href="https://wa.me/+96897228463" key={service._id}>
              <Card className="p-2">
                <Carousel className="w-full max-w-full">
                  <CarouselContent>
                    {service?.serviceImages.map((serv, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={serv}
                          width={300}
                          height={300}
                          alt="service"
                          className="w-full max-h-64 object-cover rounded-md"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <h1 className="mt-1 text-[21px] font-semibold">
                  {service.servicename}
                </h1>
              </Card>
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default ServicCard;
