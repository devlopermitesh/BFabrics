import React from "react";
import MediaKitProvider from "./components/ImagekitProvider";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <MediaKitProvider>
      <div>{children}</div>
    </MediaKitProvider>
  );
}

export default layout;
