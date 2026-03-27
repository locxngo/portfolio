import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavigationProvider } from "../context/NavigationContext";
import VerticalNavigator from "../components/VerticalNavigator";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loc Ngo | Senior Software Architect | Technical Consultant | Microservice & Distributed System",
  description: "A simple man with a big heart and a passion for building scalable distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased font-display`}>
        <NavigationProvider>
          {/* Main Container - Switches based on responsive breakpoint */}
          <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-[#191919] md:bg-white md:dark:bg-white md:p-12">

            {/* --- TOP HEADER --- */}
            <div className="hidden md:block">
              <Header />
            </div>
            <div className="md:hidden">
              <MobileHeader />
            </div>

            {/* --- MAIN PAGE CONTENT --- */}
            <div className="flex-1 flex flex-col md:block overflow-y-auto">
              {children}
            </div>

            {/* --- VERTICAL NAV (Desktop Only) --- */}
            <div className="hidden md:block">
              <VerticalNavigator />
            </div>

            {/* --- BOTTOM FOOTER --- */}
            <div className="hidden md:block">
              <Footer />
            </div>
            <div className="md:hidden mt-auto">
              {/* Only show mobile footer if not on intro page - similar to desktop footer logic. 
                  Wait, intro.html is FOR the intro page on mobile! 
                  Ah! If the user wants the mobile footer ON the intro page, I should not hide it here.
                  Let's just render it. We can add conditional logic in MobileFooter if needed. */}
              <MobileFooter />
            </div>

            {/* Decorative background elements (Desktop Only) */}
            <div className="hidden md:block absolute top-0 right-0 -z-10 w-1/3 h-1/3 opacity-[0.03] pointer-events-none">
              <div
                className="w-full h-full bg-linear-to-bl from-primary to-transparent"
                data-alt="Subtle grey corner gradient for texture"
              ></div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 opacity-[0.02] pointer-events-none">
              <div
                className="w-full h-full bg-linear-to-tr from-primary to-transparent"
                data-alt="Faint grey wash gradient in bottom corner"
              ></div>
            </div>
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
