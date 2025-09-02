import { useConditionalRender } from "@/utils/queryHandlers";
import { useStatics } from "../../api/api";
import Link from "next/link";
import StaticsCount from "../atoms/StaticsCount";

const CounterSection = () => {
  const queryResult = useStatics();
  const { renderWithStates } = useConditionalRender(queryResult);

  return (
    <div className="flex w-full">
      {renderWithStates(
        (data) => (
          <div className="flex flex-col w-full  mx-3 md:flex-row">
            <div className="flex flex-col flex-1 ">
              {/* //Category   */}
              <div className="flex flex-row w-full justify-around md:justify-start gap-3">
                {data[0].category.map((item) => (
                  <Link
                    key={item}
                    href={`/category/${item}`}
                    className="p-2 px-4 border border-dashed border-inactive rounded text-inactive font-thin font-primary"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col w-ful py-3">
                <p className="font-primary font-semibold uppercase text-white text-2xl md:text-3xl ">
                  {data[0].punchLine}
                </p>
                <p className="text-inactive font-primary text-sm md:text-lg max-w-lg">
                  {data[0].descrption}
                </p>
              </div>
            </div>

            {/* //Statics  */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-0 mt-4 flex-1">
              {data[0].Statics.map((item) => (
                <StaticsCount
                  key={item.name}
                  name={item.name}
                  count={item.count}
                />
              ))}
            </div>
          </div>
        ),
        {
          loadingText: "Loading  Statics...",
          emptyText: "No Statics found",
          errorText: "Failed to load Statics",
        },
      )}
    </div>
  );
};
export default CounterSection;
