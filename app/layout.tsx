import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { Roboto, Poppins, Roboto_Mono } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import clsx from "clsx";

let title = "Llama Coder – AI Code Generator";
let description = "Generate your next app with Llama 3.1 405B";
let url = "https://llamacoder.io/";
let ogimage = "https://llamacoder.io/og-image.png";
let sitename = "llamacoder.io";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-mono",
});
const roboto = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const poppins = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});
const roboto_mono = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
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
      className={clsx("w-full", `${poppins.className}${roboto_mono.className}`)}
    >
      <head>
        <PlausibleProvider domain="llamacoder.io" />
      </head>
      {children}
    </html>
  );
}
