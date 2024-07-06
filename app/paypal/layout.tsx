import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayPal | A Simple and Safer Way to Pay and Get Paid",
  icons: [{ url: "/images/paypal.png", href: "/images/paypal.png" }],
};

export default function PayPalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
