import {
  fakeCollectionProducts,
  fakeCounterStatics,
  FakeFAQ,
  fakeHighlightFeatures,
  FakenewAddition,
  fakeSnapImages,
  FakeTestinomal,
  fakeWorkflowSteps,
} from "@/FakeData/data";
import { asyncHandler } from "@/utils/asynchandler";

class View {
  constructor() {}
  GetSnapImages = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return fakeSnapImages;
    return await asyncHandler({
      method: "GET",
      url: "",
    });
  };
  GetCounterStattics = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return fakeCounterStatics;
  };
  GetHighlightFeature = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return fakeHighlightFeatures;
  };
  GetWorkflow = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return fakeWorkflowSteps;
  };
  GetCollection = async (category: string) => {
    console.log(category);
    await new Promise((res) => setTimeout(res, 500));
    return fakeCollectionProducts;
  };
  GetTestinomal = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return FakeTestinomal;
  };
  GetFAQ = async (Category: string) => {
    console.log(Category);
    await new Promise((res) => setTimeout(res, 500));
    return FakeFAQ;
  };
  GetNewAddition = async () => {
    await new Promise((res) => setTimeout(res, 500));
    return FakenewAddition;
  };
}

export const view = new View();
