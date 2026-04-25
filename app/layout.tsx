import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {Merriweather} from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Technova 2025",
  description: "By The Tech Club of Asansol Engineering College & Subham Bhattacharya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
