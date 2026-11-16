import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi blog · Tidy Studio",
  description: "Panel privado de edición de Tidy Studio.",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="studio-shell">{children}</div>;
}
