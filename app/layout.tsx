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
  title: "Tecno Gas Pakistan | Premium Home Appliances Since 1995",
  description: "Tecno Gas Pakistan has been a trusted name in high-quality home appliances since 1995. Explore our wide range of hobs, ovens, cooker hoods, and water heater geysers. Elevate your home with premium kitchen solutions and efficient water heating systems."
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
        <div className="bg-[#b30202] absolute top-0 -z-50 right-0 h-80 w-60 rounded-full blur-[25rem] dark:blur-[15rem] sm:w-[68.75rem] dark:bg-[#711400]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <div className="bg-[#b30202] absolute bottom-0 -z-50 left-0 h-80 w-60 rounded-full blur-[25rem] dark:blur-[30rem] sm:w-[68.75rem] dark:bg-[#711500]"></div>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
