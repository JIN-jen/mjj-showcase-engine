import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M-JJ Showcase Engine",
    template: "%s | M-JJ Showcase Engine",
  },
  description: "SEO industry template lead generation matrix for Tanzania, Chinese businesses, and local entrepreneurs.",
  openGraph: {
    siteName: "M-JJ Showcase Engine",
    title: "M-JJ Showcase Engine",
    description: "SEO industry template lead generation matrix for Tanzania, Chinese businesses, and local entrepreneurs.",
    type: "website",
  },
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
