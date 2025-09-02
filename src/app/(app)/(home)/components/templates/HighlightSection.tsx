import { useConditionalRender } from "@/utils/queryHandlers";
import { useHighFeatures } from "../../api/api";
import { useState } from "react";
import BorderView from "../atoms/BorderView";
import { Button } from "@/components/ui/button";
import { HighlightItem } from "../atoms/HighLightItem";
import { useDevice } from "@/utils/useDevice";

const HighlighSection = () => {
  const queryResult = useHighFeatures();
  const { isMobile } = useDevice();
  const ShowMin = 3;
  const [ShowAll, setShowAll] = useState(false);
  const { renderWithStates } = useConditionalRender(queryResult);

  return (
    <div className="flex flex-col px-2 w-full">
      {renderWithStates(
        (data) => {
          const features = data[0].Features;

          // Mobile => show min unless "View All" clicked
          // Desktop => always show all
          const visibleFeatures = isMobile
            ? (ShowAll ? features : features.slice(0, ShowMin))
            : features;

          return (
            <div className="flex w-full flex-col">
              {/* heading */}
              <div className="flex flex-col w-full gap-4">
                <h2 className="font-primary font-semibold uppercase text-white text-2xl md:text-3xl">
                  {data[0].punchLine}
                </h2>
                <p className="text-inactive font-primary text-sm md:text-lg max-w-lg">
                  {data[0].descp}
                </p>
              </div>

              {/* features grid */}
              <div
                className="
                  mt-6 gap-4 
                  grid grid-cols-1 
                  md:grid-cols-2 
                  lg:grid-cols-3
                "
              >
                {visibleFeatures.map((item) => (
                  <BorderView key={item.heading} className="rounded-lg">
                    <HighlightItem item={item} />
                  </BorderView>
                ))}
              </div>

              {/* Mobile-only toggle button */}
              {isMobile && features.length > ShowMin && (
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="bg-lightdark text-white px-4 py-2 rounded-md"
                  >
                    {ShowAll ? "Show Less" : "View All"}
                  </Button>
                </div>
              )}
            </div>
          );
        },
        {
          loadingText: "Loading Statics...",
          emptyText: "No Statics found",
          errorText: "Failed to load Statics",
        }
      )}
    </div>
  );
};

export default HighlighSection;
