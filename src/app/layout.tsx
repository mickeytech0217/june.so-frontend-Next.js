import type { Metadata } from "next";
import { Rubik, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const rubik_init = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const outfit_init = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "June.so",
  description:
    "June - Product analytics for B2B SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik_init.variable} ${outfit_init.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
