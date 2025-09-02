"use client";
import { motion } from "framer-motion";
import { FlipSlip } from "@/FakeData/data";

export default function FlipSlipShowcase() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full">
      <h2 className="text-xl text-white font-bold">Our Unique Shirt Styles</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {FlipSlip.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-xl px-4 py-2 text-sm font-medium cursor-pointer"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
