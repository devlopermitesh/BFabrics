"use client";
import { ImageKitProvider } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

export default function MediaKitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticator = async () => {
    try {
      const res = await fetch("/api/v1/auth-imagekit");
      if (!res.ok) throw new Error("Failed to authenticate");
      return res.json();
    } catch (error) {
      console.error("ImageKit authentication error:", error);
      throw error;
    }
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      {children}
    </ImageKitProvider>
  );
}
