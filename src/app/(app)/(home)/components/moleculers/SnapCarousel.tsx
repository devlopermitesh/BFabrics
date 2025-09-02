"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import GetIcon from "@/utils/getIcon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Images {
  _id: string;
  url: string;
}

interface SnapCarouselProps {
  Images: Images[];
  interval?: number;
}

const SnapCarousel: React.FC<SnapCarouselProps> = ({ Images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = Images.length;

  useEffect(() => {
    if (!totalItems) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => clearInterval(id);
  }, [totalItems, interval]);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Carousel className="w-full overflow-hidden">
        <CarouselContent
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Images.map((item) => (
            <CarouselItem key={item._id} className="flex-none w-full">
              <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
                <Image
                  src={item.url}
                  alt={`Image ${item._id}`}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={Images.indexOf(item) === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Floating button */}
      <div className="bg-background p-4 z-10 rounded-xl -mt-5">
        <div className="inline-block px-[0.3] py-[0.4] md:px-[0.7] md:py-[0.1] bg-sand rounded-lg cursor-pointer">
          <Button
            className="bg-lightdark font-primary font-thin text-xs md:text-sm
              p-2 md:p-6 rounded-lg z-10 relative cursor-pointer"
          >
            Shop Now
            <GetIcon name="Arrowout" className="font-thin size-5 text-sand ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SnapCarousel;
