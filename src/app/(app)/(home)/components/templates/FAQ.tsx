import { useConditionalRender } from "@/utils/queryHandlers";
import { useFAQ } from "../../api/api";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BorderView from "../atoms/BorderView";
import { twMerge } from "tailwind-merge";
import Answer from "../atoms/Answer";

const FAQSection = () => {
  const [Category, setCategory] = useState<
    "All" | "Ordering" | "Shipping" | "Return" | "Support" | string
  >("All");
  const queryResult = useFAQ(Category);
  const { renderWithStates } = useConditionalRender(queryResult);

  return (
    <BorderView className="flex w-full rounded-xl border-b-0 border-l-0 border-r-0">
      {renderWithStates(
        (data) => {
          return (
            <div className="flex w-full flex-col">
              <div className="flex flex-row w-full overflow-hidden relative py-10">
                {/* heading */}
                <div className="flex flex-col w-full gap-4 z-10">
                  <h2 className="font-primary font-semibold uppercase text-white text-2xl md:text-3xl z-10">
                    {data[0].punchLine}
                  </h2>
                  <p className="text-inactive font-primary text-sm md:text-lg max-w-lg z-10">
                    {data[0].descp}
                  </p>
                  {/* Category */}
                  <div className="flex flex-row w-full justify-around md:justify-start gap-3">
                    {data[0].category.map((item) => (
                      <Button
                        key={item}
                        onClick={() => {
                          setCategory(item);
                        }}
                        className={twMerge(
                          `p-2 px-4 border border-dashed border-inactive rounded text-inactive font-thin font-primary`,
                          item === Category
                            ? "bg-sand text-black"
                            : "bg-lightdark",
                        )}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
                <Image
                  src={data[0].imagecover}
                  height={100}
                  width={100}
                  alt="cover"
                  className="absolute h-64 w-64 object-contain top-0 -right-20 z-0 hidden md:block"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                {data[0].Question.map((item, index) => (
                  <BorderView key={index} className="mt-0">
                    <Answer item={item} />
                  </BorderView>
                ))}
              </div>
            </div>
          );
        },
        {
          loadingText: "Loading FAQ...",
          emptyText: "No FAQ found",
          errorText: "Failed to load FAQ",
        },
      )}
    </BorderView>
  );
};
export default FAQSection;
