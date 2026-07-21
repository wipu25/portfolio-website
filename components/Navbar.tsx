"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About Me" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-background/80 backdrop-blur dark:border-white/[.145]">
      <nav className="flex w-full items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Portfolio
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-foreground"
                      : "text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
