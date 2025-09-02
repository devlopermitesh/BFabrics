import axios, { AxiosError, AxiosRequestConfig } from "axios";

// ✅ Axios instance (custom config ke liye)
const api = axios.create({
  baseURL:"this",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Async handler
export const asyncHandler = async <T>(
  config: AxiosRequestConfig
): Promise<T | null> => {
  try {
    const response = await api(config);
    return response.data as T;
  } catch (error) {
    const err = error as AxiosError;

    // Logging error
    console.error(
      "API Error:",
      err.response?.status,
      err.response?.data || err.message
    );

    return null;
  }
};
