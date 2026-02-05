import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/ThemeProvider";
import DotGrid from "@/components/DotGrid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhlanhla Masuku | Full Stack Developer",
  description:
    "Full Stack Developer specializing in healthcare technology, React, Vue.js & TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')})()`,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen max-w-screen-xl lg:mx-auto antialiased transition-colors duration-300",
          inter.className
        )}
      >
        <ThemeProvider>
          <DotGrid />
          <main className='relative z-10'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
