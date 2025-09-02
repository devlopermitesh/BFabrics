"use client"; 

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}

export function useNavlinks(): NavItem[] {
  const pathname = usePathname();

  const navlinks = useMemo<NavItem[]>(() => [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Products",
      href: "/products",
      active: pathname === "/products",
    },
    // Add more items here
  ], [pathname]);

  return navlinks;
}
