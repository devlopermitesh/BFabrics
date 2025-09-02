"use client";
import Navbar from "@/components/orgnanism/Navbar";

import CounterSection from "./components/templates/CounterSection";
import HighlighSection from "./components/templates/HighlightSection";
import WorkFlowSection from "./components/templates/WorkFlowSection";
import CollectionSection from "./components/templates/CollectionSection";
import Testinomal from "./components/templates/Testinomal";
import FAQSection from "./components/templates/FAQ";
import NewAddShow from "./components/templates/NewAddShow";
import FlipSlipShowcase from "./components/moleculers/FlipSlipShowcase";
import Footer from "@/components/orgnanism/Footer";
import CarouselSection from "./components/templates/Carousel";

const Page = () => {
  return (
    <div className=" flex flex-col w-full h-full bg-background">
      <Navbar />
      <CarouselSection />
      <CounterSection />
      <HighlighSection />
      <WorkFlowSection />
      <CollectionSection />
      <Testinomal />
      <FAQSection />
      <NewAddShow />
      <FlipSlipShowcase />
      <Footer />
    </div>
  );
};
export default Page;
