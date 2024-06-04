"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname as Pathname } from "next/navigation";
import { routeConfig } from "@/config/route";

function Navigation() {
  const pathname = Pathname();

  const renderedLinks = useMemo(() => {
    return routeConfig.map((link) => {
      const isActive =
        link.path === "/"
          ? pathname === link.path
          : pathname.includes(link.path);
      return (
        <li
          key={link.path}
          className={`hover:text-primary ${
            isActive ? "text-primary" : "text-primary/30"
          }`}
        >
          <Link href={link.path} className="hidden md:block">
            {link.label}
          </Link>
          <Link href={link.path} className="md:hidden">
            <link.icon />
          </Link>
        </li>
      );
    });
  }, [pathname]);

  return renderedLinks;
}

export default Navigation;
