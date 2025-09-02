import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type TestimonialUser = {
  _id: number;
  name: string;
  coverImage: string; // URL
};

interface TestimonialItemProps {
  item: {
    user: TestimonialUser;
    rate: number; // 0–5
    comment: string;
  };
  className?: string;
}

const clamp = (n: number, min = 0, max = 5) => Math.max(min, Math.min(max, n));

const TestimonialItem: React.FC<TestimonialItemProps> = ({ item, className }) => {
  const rating = clamp(item.rate);

  return (
    <div
      className={twMerge(
        "relative flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-black/40 p-5 md:p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur",
        className
      )}
    >
      {/* Quote mark */}
      <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-zinc-900/70 grid place-items-center border border-zinc-800">
        <span className="text-zinc-400 text-xl">“</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={twMerge(
              "h-4 w-4 md:h-5 md:w-5",
              i < rating ? "fill-yellow-400" : "fill-zinc-700"
            )}
            aria-hidden="true"
          >
            <path d="M10 15.27l-5.18 3.04 1.4-5.99L1 7.24l6.09-.52L10 1l2.91 5.72 6.09.52-5.22 5.08 1.4 5.99z" />
          </svg>
        ))}
        <span className="ml-2 text-xs md:text-sm text-zinc-400">{rating}/5</span>
      </div>

      {/* Comment */}
      <p className="text-sm md:text-base leading-relaxed text-zinc-200">
        {item.comment}
      </p>

      {/* User */}
      <div className="mt-2 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-700">
          <Image
            src={item.user.coverImage}
            alt={item.user.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm md:text-base font-medium text-white">{item.user.name}</span>
          <span className="text-xs text-zinc-400">Verified Buyer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
