import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
   
    <html lang="fr" className={`${manrope.variable} ${michroma.variable}`}>
      <head>
        <meta name="description" content="Portfolio Kamil NACHAT" />
        <meta
          property="og:description"
          content="Hi ! I am Kamil and i'm a fullstack developer based in Paris and Montpellier. You will find my experiences, my projects, and you will learn a little more about me. Enjoy your trip to my website ! "
        />
        <meta property="og:url" content="https://kamil-nachat.fr" />
        <meta property="og:type" content="website" />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Kamil" />
      </head>
      <body
        className={manrope.className}
      >
          
        {children}
   
      </body>
    </html>
  );
}
