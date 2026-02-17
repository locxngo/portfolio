import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavigationProvider } from "../context/NavigationContext";
import VerticalNavigator from "../components/VerticalNavigator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loc Ngo | Senior Software Architect",
  description: "A simple man with a big heart and a passion for building scalable distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-primary font-display`}>
        <NavigationProvider>
          <div className="relative flex h-screen w-full flex-col overflow-hidden p-20">
            <Header />
            {children}

            {/* Vertical Navigator */}
            <VerticalNavigator />

            <Footer />

            {/* Decorative background elements (Subtle Monochrome Gradients) */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 opacity-[0.03] pointer-events-none">
              <div
                className="w-full h-full bg-linear-to-bl from-primary to-transparent"
                data-alt="Subtle grey corner gradient for texture"
              ></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 opacity-[0.02] pointer-events-none">
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
