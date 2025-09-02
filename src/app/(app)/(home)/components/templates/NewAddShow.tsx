import { useConditionalRender } from "@/utils/queryHandlers";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import GetIcon from "@/utils/getIcon";
import { useNewAddition } from "../../api/api";

const NewAddShow = () => {
  const queryResult = useNewAddition();
  const router = useRouter();
  const { renderWithStates } = useConditionalRender(queryResult);

  return (
    <div className="flex w-full px-2 md:px-10 md:mt-10">
      {renderWithStates(
        (data) => {
          return (
            <div
              className="rounded-xl flex flex-row py-6 px-6 min-h-[200px] md:w-full shadow-lg overflow-hidden relative"
              style={{ backgroundColor: data[0].background }}
            >
              {/* Content Section */}
              <div className="flex-[2] flex flex-col justify-center gap-4 pr-6 z-10">
                <h2 className="text-black font-bold text-3xl font-primary leading-tight">
                  {data[0].heading}
                </h2>
                <p className="text-black/80 font-primary font-light text-base max-w-lg leading-relaxed">
                  {data[0].descp}
                </p>
                <Button
                  className="w-fit bg-black text-white hover:bg-black/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                  onClick={() => router.push(data[0].visithref)}
                >
                  {data[0].visitTitle}
                  <GetIcon name="Arrowout" className="size-4" />
                </Button>
              </div>

              {/* Image Section */}
              <div className="flex-1 relative min-h-[150px]">
                <Image
                  src={data[0].ImageCover}
                  fill
                  alt="promotional background"
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        },
        {
          loadingText: "Loading New Addition...",
          emptyText: "No new addition found",
          errorText: "Failed to load new addition",
        },
      )}
    </div>
  );
};

export default NewAddShow;
