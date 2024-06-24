import { Inter } from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "@/context/UserContext";
import dynamic from "next/dynamic";
import { Providers } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Generated by deepak yadav",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className} >
        <Providers>
       <MyContextProvider>
        {children}
        </MyContextProvider>
        </Providers>
        </body>
    </html>
  );
}