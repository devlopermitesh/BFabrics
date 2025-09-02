import Image from "next/image";
import React from "react";

interface HighlightProps {
  item: {
    cardType: string;
    icon: string;
    iconHighImage: string;
    heading: string;
    desc: string;
  };
}

export const HighlightItem: React.FC<HighlightProps> = ({ item }) => {
  return (
    <div className="relative flex flex-col bg-transparent p-6 rounded-lg overflow-hidden w-full">
      {/* Background Icon (decorative shape) */}
      <Image
        src={item.iconHighImage}
        alt="background-shape"
        width={140}
        height={140}
        className="absolute -top-5 -right-10 opacity-20 pointer-events-none select-none  bg-lighdark"
      />

      {/* Foreground Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full  mb-4">
        <Image
          src={item.icon}
          alt={item.heading}
          width={44}
          height={34}
          className="object-fill w-full h-full"
        />
      </div>

      {/* Heading */}
      <h4 className="text-white font-semibold font-primary text-lg mb-2">
        {item.heading}
      </h4>

      {/* Description */}
      <p className="text-inactive font-primary text-sm leading-relaxed max-w-xs">
        {item.desc}
      </p>
    </div>
  );
};
