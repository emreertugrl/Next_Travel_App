"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 rounded-full  lg:hidden bg-orange-500 cursor-pointer text-white">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] p-10">
        <SheetTitle className="mb-5 text-3xl text-orange-500">TRAVEL</SheetTitle>
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${pathname === link.href ? "text-orange-500" : "hover:text-orange-500"}`}
          >
            {link.label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
