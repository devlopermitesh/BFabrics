import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  item: {
    id: number;
    image: string;
    name: string;
    descp: string;
    category: string;
    Fit: string;
    price: string;
    current: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-800 overflow-hidden bg-black ">
      {/* Image */}
      <div className="relative w-full h-80">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        {/* Category + Shop Now */}
        <div className="flex justify-between items-center">
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-300">
            {item.category}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-zinc-700 text-white hover:bg-zinc-900"
          >
            Shop Now <ArrowUpRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-lg">
          {item.name}
        </h3>

        {/* Fit + Price */}
        <div className="flex justify-between text-sm text-zinc-400">
          <span>Fit: {item.Fit}</span>
          <span>
            Price:{" "}
            <span className="text-white font-medium">
              {item.current}{item.price}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
