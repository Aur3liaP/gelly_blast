import type { Metadata } from "next";
import { Bangers, Luckiest_Guy, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-police",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-title",
  weight: "400",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "GellyBlast - Terrain de Gelly Ball à Biscarosse",
  description: "GellyBlast - Terrain de Gelly Ball à Biscarosse - Plage Maguide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preload" as="image" href="/Logo_HD 1.png"/>
      </head>
      <body
        className={`${montserrat.variable} ${bangers.variable} ${luckiestGuy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
