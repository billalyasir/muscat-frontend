import React from "react";
import BannerTitle from "../homepage/bannertitle";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const ServiceDetail = () => {
  return (
    <div className="min-h-screen">
      <BannerTitle />
      <div className="grid lg:grid-cols-2 gap-2">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-15px]" />
            <CarouselNext className="right-[-15px]" />
          </Carousel>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Service details</h1>
          <hr className="my-2" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
