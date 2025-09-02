"use client";
import React from "react";

// Simple and clean query handler for Next.js
export const useConditionalRender = <T,>(queryResult: {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
}) => {
  const renderWithStates = (
    successComponent: (data: T) => React.ReactNode,
    options?: {
      loadingText?: string;
      emptyText?: string;
      errorText?: string;
    },
  ): React.ReactNode => {
    const { data, isLoading, error, isError } = queryResult;

    // Loading state
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-lg">{options?.loadingText || "Loading..."}</p>
        </div>
      );
    }

    // Error state
    if (isError) {
      return (
        <div className="flex items-center justify-center h-96">
          <div className="text-red-600 text-center">
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p>{options?.errorText || error?.message || "An error occurred"}</p>
          </div>
        </div>
      );
    }

    // Empty/no data state
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return (
        <div className="flex items-center justify-center h-96">
          <p className="text-lg text-gray-600">
            {options?.emptyText || "No data available"}
          </p>
        </div>
      );
    }

    // Success state - render the component with data
    return successComponent(data);
  };

  return { renderWithStates };
};
