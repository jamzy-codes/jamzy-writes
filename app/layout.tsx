import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const SITE_URL = "https://jamzy-writes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jamzy — Web3 Technical Writer",
    template: "%s — Jamzy",
  },
  description:
    "Turning dense protocol mechanics into documents people actually trust. Whitepapers and protocol documentation for Web3 teams.",
  keywords: [
    "Web3 technical writer",
    "whitepaper writer",
    "protocol documentation",
    "crypto documentation",
    "blockchain technical writing",
  ],
  authors: [{ name: "Jamzy" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Jamzy",
    title: "Jamzy — Web3 Technical Writer",
    description:
      "Turning dense protocol mechanics into documents people actually trust. Whitepapers and protocol documentation for Web3 teams.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Only_1_Jamzy",
    creator: "@Only_1_Jamzy",
    title: "Jamzy — Web3 Technical Writer",
    description:
      "Turning dense protocol mechanics into documents people actually trust.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
