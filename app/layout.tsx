import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/site-footer";
import CatCompanion from "@/components/cat-companion";

export const metadata: Metadata = {
  title: "Tidy Studio — Andrea Oyarce · Desarrollo web",
  description: "Soy Andrea. Desarrollo sitios web claros y cercanos para profesionales que atienden con cita. Conoce mi trabajo y la historia detrás de Tidy Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-CL"><body>{children}<SiteFooter /><CatCompanion /></body></html>;
}
