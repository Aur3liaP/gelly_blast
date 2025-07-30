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
  title: "GellyBlast - Paintball en Gelée à Biscarrosse | Activité Famille dès 8 ans",
  description: "Découvrez le GellyBall à Biscarrosse ! Paintball en gelée sans douleur, sans taches, pour toute la famille dès 8 ans. Plage Maguide - Réservations ouvertes.",
  
  // Mots-clés pour le référencement local
  keywords: [
    "GellyBall", "paintball gelée", "Biscarrosse", "activité famille", 
    "loisir enfant", "plage Maguide", "Landes", "paintball sans douleur", 
    "activité 8 ans", "gel ball", "anniversaire enfant", "séminaire entreprise"
  ],
  
  // Informations géographiques
  other: {
    "geo.region": "FR-NAQ",
    "geo.placename": "Biscarrosse",
    "geo.position": "44.4944;-1.2472"
  },
  
  // Open Graph pour les réseaux sociaux
  openGraph: {
    title: "GellyBlast - Paintball en Gelée à Biscarrosse",
    description: "Paintball en gelée sans douleur ni taches ! Activité famille dès 8 ans sur la plage Maguide à Biscarrosse.",
    url: "https://www.gellyblast.fr",
    siteName: "GellyBlast",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // À créer : 1200x630px
        width: 1200,
        height: 630,
        alt: "GellyBlast - Paintball en gelée famille à Biscarrosse"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "GellyBlast - Paintball en Gelée à Biscarrosse",
    description: "Paintball en gelée sans douleur ! Activité famille dès 8 ans - Plage Maguide",
    images: ["/twitter-image.jpg"] // 1200x600px
  },
  
  // Informations structurées
  alternates: {
    canonical: "https://www.gellyblast.fr"
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    category: "entertainment",
  classification: "Activité de loisir famille",
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
        <link rel="preload" as="image" href="/Carrousel/Carrousel1.png"/>

        <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GellyBlast",
              "description": "Paintball en gelée pour toute la famille dès 8 ans",
              "image": "https://www.gellyblast.fr/Logo_HD 1.png",
              "url": "https://www.gellyblast.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chemin de Maguide",
                "addressLocality": "Biscarrosse",
                "postalCode": "40600",
                "addressCountry": "FR",
                "addressRegion": "Nouvelle-Aquitaine"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.4944,
                "longitude": -1.2472
              },
              "priceRange": "€",
              "servesCuisine": "Entertainment",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Activités GellyBall",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Session GellyBall",
                      "description": "Paintball en gelée sans douleur pour toute la famille"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${bangers.variable} ${luckiestGuy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
