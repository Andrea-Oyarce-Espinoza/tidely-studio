import type { Metadata } from "next";
import "./globals.css";
import CatCompanion from "@/components/cat-companion";

export const metadata: Metadata = {
  title: "Tidy Studio — Andrea Oyarce · Desarrollo web",
  description: "Soy Andrea, licenciada en educación y desarrolladora web. Creo sitios personalizados para profesionales independientes, con una mirada cercana y sentido humano.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-CL"><body>{children}<CatCompanion /></body></html>;
}
