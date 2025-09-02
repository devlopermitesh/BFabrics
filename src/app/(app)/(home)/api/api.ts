import { useQuery } from "@tanstack/react-query";
import { view } from "../Services/View";

export const useSnapImages = () =>
  useQuery({
    queryKey: ["snapImages"],
    queryFn: view.GetSnapImages,
    retry: 2,
  });

export const useStatics = () =>
  useQuery({
    queryKey: ["statics"],
    queryFn: view.GetCounterStattics,
    retry: 2,
  });

export const useHighFeatures = () =>
  useQuery({
    queryKey: ["Features"],
    queryFn: view.GetHighlightFeature,
    retry: 2,
  });

export const useWorkFlow = () =>
  useQuery({
    queryKey: ["workflow"],
    queryFn: view.GetWorkflow,
  });

export const useCollection = (category: string) =>
  useQuery({
    queryKey: ["collections", category],
    queryFn: () => view.GetCollection(category), // 👈 param pass
    enabled: !!category, // 👈 optional: run only if category exists
  });

export const useTestimonal = () =>
  useQuery({
    queryKey: ["Testimonal"],
    queryFn: view.GetTestinomal,
  });

export const useFAQ = (category: string) =>
  useQuery({
    queryKey: ["Faq", category],
    queryFn: () => view.GetFAQ(category),
  });
export const useNewAddition = () =>
  useQuery({
    queryKey: ["Addition"],
    queryFn: view.GetNewAddition,
  });
