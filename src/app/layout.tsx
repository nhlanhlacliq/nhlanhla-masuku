import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhlanhla Masuku",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-bl from-slate-900 via-black to-slate-900 max-w-screen-xl lg:mx-auto",
          inter.className
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
