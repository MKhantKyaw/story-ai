"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "My Stories" },
];

export default function NavBar() {
  const activePathname = usePathname();
  return (
    <section>
      <nav className="flex justify-between items-center px-4 lg:px-8 py-4 border-b-2 gap-2 border-slate-400 border-dashed">
        <Logo />
        <ul className="flex items-center gap-4 lg:gap-8">
          {links.map((link, index) => (
            <li
              key={index}
              className={`p-2 rounded-2xl b state-effects ${
                activePathname === link.href
                  ? "text-slate-50 bg-gradient-to-r from-purple-400 to-red-400"
                  : "border border-slate-600 border-dashed"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
