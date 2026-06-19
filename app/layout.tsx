import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIIH Brand Website",
  description: "Cinematic portfolio skeleton for TIIH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-canvas text-ink">
      <body>{children}</body>
    </html>
  );
}
