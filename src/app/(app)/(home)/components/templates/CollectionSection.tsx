import { useConditionalRender } from "@/utils/queryHandlers";
import { useCollection } from "../../api/api";
import BorderView from "../atoms/BorderView";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProductCard from "../organism/ProductCard";
import { twMerge } from "tailwind-merge";

const CollectionSection = () => {
  const [Category, setCategory] = useState<
    "All" | "WOMAN" | "MAN" | "KIDS" | string
  >("All");
  const [showAll, setShowAll] = useState(false);
  const queryResult = useCollection(Category);
  const { renderWithStates } = useConditionalRender(queryResult);

  const SHOW_MIN = 6;

  return (
    <BorderView className="flex w-full rounded-xl border-b-0 border-l-0 border-r-0">
      {renderWithStates(
        (data) => {
          const products = data[0].products;
          const visibleProducts = showAll
            ? products
            : products.slice(0, SHOW_MIN);

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
                          setShowAll(false); // reset when switching category
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
                  src={data[0].imageCover}
                  height={100}
                  width={100}
                  alt="cover"
                  className="absolute h-64 w-64 object-contain top-0 -right-20 z-0 hidden md:block"
                />
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
                {visibleProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>

              {/* View All / Show Less */}
              {products.length > SHOW_MIN && (
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="bg-lightdark text-white px-6 py-2 rounded-lg"
                  >
                    {showAll ? "Show Less" : "View All"}
                  </Button>
                </div>
              )}
            </div>
          );
        },
        {
          loadingText: "Loading Collection...",
          emptyText: "No products found",
          errorText: "Failed to load Collection",
        },
      )}
    </BorderView>
  );
};

export default CollectionSection;
