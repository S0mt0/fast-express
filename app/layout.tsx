import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navbar/header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastExpress Courier - Global Logistics and International Shipping. ",
  description:
    "FastExpress Courier is the global leader in the logistics industry. Specializing in international shipping, courier services and transportation.",
  icons: [{ url: "images/seo.jpg", href: "images/seo.jpg" }],
  keywords: [
    "Track",
    "tracker",
    "courier",
    "delivery",
    "deliver",
    "parcel",
    "package delivery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
