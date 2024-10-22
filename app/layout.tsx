import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sufiyan | Personal Portfolio",
  description: "This is portfolio website of full stack web developer hosted on vercel"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-teal-800 absolute top-0 -z-50 right-0 h-80 w-60 rounded-full blur-[25rem] dark:blur-[15rem] sm:w-[68.75rem] dark:bg-teal-700"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <div className="bg-teal-900 absolute bottom-0 -z-50 left-0 h-80 w-60 rounded-full blur-[25rem] dark:blur-[30rem] sm:w-[68.75rem] dark:bg-teal-700"></div>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
