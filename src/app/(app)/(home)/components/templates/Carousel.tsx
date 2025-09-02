"use client";
import { useConditionalRender } from "@/utils/queryHandlers";
import { useSnapImages } from "../../api/api";
import SnapCarousel from "../moleculers/SnapCarousel";
import { UseQueryResult } from "@tanstack/react-query";
export interface ImageItem {
  _id: string;
  url: string;
}

const CarouselSection = () => {
  const queryResult = useSnapImages() as UseQueryResult<ImageItem[], Error>;
  const { renderWithStates } = useConditionalRender(queryResult);
  return (
    <div>
      {renderWithStates(
        (data) => (
          <SnapCarousel Images={data} />
        ),
        {
          loadingText: "Loading snap images...",
          emptyText: "No snap images found",
          errorText: "Failed to load images",
        },
      )}
    </div>
  );
};
export default CarouselSection;
