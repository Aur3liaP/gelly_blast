import type { Metadata } from "next";
import { Bangers, Luckiest_Guy, Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-police",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-title",
  weight:'400',
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-logo",
  weight:'400',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "GellyBlast",
  description: "GellyBlast - Terrain de Gelly Ball à Biscarosse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${bangers.variable} ${luckiestGuy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
