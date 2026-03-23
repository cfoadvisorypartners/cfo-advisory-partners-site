import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CFO Advisory Partners",
  description:
    "Fractional CFO services for businesses that need stronger reporting, better cash visibility, and clearer financial direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}