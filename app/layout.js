"use client";

import Nav from "@/components/Nav";
import "./globals.css";
import { StyledContextProvider } from "@/context/StyledContext";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reynald Jessamine Dion",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledContextProvider>
          <div className="grid__layout">
            <Nav />

            <main className="main">{children}</main>

            <Footer />
          </div>
        </StyledContextProvider>
      </body>
    </html>
  );
}
