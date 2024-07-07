import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayPal | A Simple and Safer Way to Pay and Get Paid",
  icons: [{ url: "/images/paypal.png", href: "/images/paypal.png" }],
  description:
    "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers; it serves as an electronic alternative to traditional paper methods such as checks and money orders.",
};

export default function PayPalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
