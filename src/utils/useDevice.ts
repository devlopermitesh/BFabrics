import { useEffect, useState } from "react";

export function useDevice(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkDevice();

    // Update on resize
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [breakpoint]);

  return { isMobile, isDesktop: !isMobile };
}
