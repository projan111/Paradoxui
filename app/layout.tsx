"use client";
// import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/website/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/website/Footer";
import { SessionContextProvider } from "./context/SessionContext";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(josefin.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}>
        <div className="fixed top-0 left-0 z-[-20] h-screen w-full bg-primary-900">
          <div className="absolute top-0 left-0 bottom-0 right-0 h-screen w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0   h-screen w-full bg-[radial-gradient(circle_400px_at_50%_350px,#fbfbfb36,#000)]"></div>
        </div>
        <div className="w-full mx-auto">
          <Navbar />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="xl:w-10/12 lg:w-11/12 overflow-hidden mx-auto">
            <SessionContextProvider>

            {children}
            </SessionContextProvider>
            </div>
        <Toaster />

        </ThemeProvider>
        <div className="w-full mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
