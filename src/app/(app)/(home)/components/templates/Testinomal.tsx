import { useConditionalRender } from "@/utils/queryHandlers";
import { useTestimonal } from "../../api/api";
import Image from "next/image";
import TestimonalItem from "../atoms/TestinomalItem";

const Testinomal = () => {
  const queryResult = useTestimonal();
  const { renderWithStates } = useConditionalRender(queryResult);
  return (
    <div className="flex flex-col w-full ">
      {renderWithStates(
        (data) => {
          return (
            <div className="flex w-full flex-col bg-">
              <div className="flex flex-row w-full overflow-hidden relative py-10">
                {/* heading */}
                <div className="flex flex-col w-full gap-4 z-10">
                  <h2 className="font-primary font-semibold uppercase text-white text-2xl md:text-3xl z-10">
                    {data[0].punchLine}
                  </h2>
                  <p className="text-inactive font-primary text-sm md:text-lg max-w-lg z-10">
                    {data[0].descp}
                  </p>
                </div>
                <Image
                  src={data[0].imageCover}
                  height={100}
                  width={100}
                  alt="cover"
                  className="absolute h-64 w-64 object-contain -top-10 -right-20 z-0 hidden md:block"
                />
              </div>

              {/* Testimonal grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
                {data[0].testimonals.slice(0, 6).map((item, index) => (
                  <TestimonalItem key={index} item={item} />
                ))}
              </div>
            </div>
          );
        },
        {
          loadingText: "Loading Testimonal...",
          emptyText: "No Testimonal found",
          errorText: "Failed to load Testimonal",
        },
      )}
    </div>
  );
};
export default Testinomal;
