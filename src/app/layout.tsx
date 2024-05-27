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
          "min-h-screen lg:flex lg:flex-row bg-gradient-to-bl from-foreground/95 to-foreground",
          inter.className
        )}
      >
        <Nav />
        <main className='lg:ml-1/4 lg:w-1/2'>{children}</main>
      </body>
    </html>
  );
}
