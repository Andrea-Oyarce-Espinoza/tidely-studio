"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { legalLinks } from "@/config/legal";

export default function LegalNavigation({ label }: { label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      {legalLinks.map(({ href, label: text }) => (
        <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{text}</Link>
      ))}
    </nav>
  );
}
