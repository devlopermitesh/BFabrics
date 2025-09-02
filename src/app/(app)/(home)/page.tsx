"use client"
import Navbar from "@/components/orgnanism/Navbar";
import SnapCarousel from "./components/moleculers/SnapCarousel";

import { useConditionalRender } from "@/utils/queryHandlers";
import { useSnapImages } from "./api/api";
import CounterSection from "./components/templates/CounterSection";
import HighlighSection from "./components/templates/HighlightSection";
import WorkFlowSection from "./components/templates/WorkFlowSection";
import CollectionSection from "./components/templates/CollectionSection";
import Testinomal from "./components/templates/Testinomal";
import FAQSection from "./components/templates/FAQ";
import NewAddShow from "./components/templates/NewAddShow";
import FlipSlipShowcase from "./components/moleculers/FlipSlipShowcase";
import Footer from "@/components/orgnanism/Footer";

const Page=()=>{
 
  const queryResult = useSnapImages();
  const { renderWithStates } = useConditionalRender(queryResult);

return (
<div className=" flex flex-col w-full h-full bg-background">
<Navbar/>
<div>
 {renderWithStates(
        (data) => <SnapCarousel Images={data as any} />,
        {
          loadingText: "Loading snap images...",
          emptyText: "No snap images found",
          errorText: "Failed to load images"
        }
      )}
      </div>
<CounterSection/>
<HighlighSection/>
<WorkFlowSection/>
<CollectionSection/>
<Testinomal/>
<FAQSection/>
<NewAddShow/>
<FlipSlipShowcase/>
<Footer/>
</div>

)
}
export default Page;