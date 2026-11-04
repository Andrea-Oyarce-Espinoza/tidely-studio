import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tidy Studio — Andrea Oyarce · Desarrollo web",
  description: "Soy Andrea. Desarrollo sitios web claros y cercanos para profesionales que atienden con cita. Conoce mi trabajo y la historia detrás de Tidy Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-CL"><body>{children}</body></html>;
}
