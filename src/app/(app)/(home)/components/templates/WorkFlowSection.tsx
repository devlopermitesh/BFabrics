import { useConditionalRender } from "@/utils/queryHandlers";
import { useHighFeatures, useWorkFlow } from "../../api/api";
import Image from "next/image";
import StepItems from "../atoms/StepItems";

const WorkFlowSection=()=>{
    const queryResult = useWorkFlow();
    const { renderWithStates } = useConditionalRender(queryResult);
return (
<div className="flex flex-col mt-10 px-3">
      {renderWithStates(
        (data) => {
        return(
            <div className="flex w-full flex-col">
<div className="flex flex-row w-full overflow-hidden relative py-10 "> 
  {/* heading */}
  <div className="flex flex-col w-full gap-4 z-10  ">
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
    className="absolute h-64 w-64 object-contain top-0 -right-20 z-0 hidden md:block"
  />
</div>

              
              {/* //Steps  */}
   <div className="flex flex-col md:flex-row">
    {data[0].Steps.map((item,index)=>(
        <StepItems key={index} index={index} descp={item.descp} heading={item.heading}/>
    ))}
    </div>

            </div>
        )
}, {
          loadingText: "Loading Workflow..",
          emptyText: "No Workflow found",
          errorText: "Failed to load Workflow",
        })}
</div>
)
}
export default WorkFlowSection;