import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  weight: "100 900",
  variable: "--font-manrope", 
});
const michroma = localFont({
  src: "./fonts/Michroma-Regular.ttf",
  weight: "400", 
  style: "normal", 
  variable: "--font-michroma", 
});

export const metadata: Metadata = {
  title: "Kamil NACHAT Portfolio",
  description: "Hi ! I am Kamil and i'm a fullstack developer based in Paris and Montpellier. You will find my experiences, my projects, and you will learn a little more about me. Enjoy your trip to my website ! "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${michroma.variable}`}>
      <body
        className={manrope.className}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
