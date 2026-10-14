import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-nastaliq" });

export const metadata: Metadata = {
  title: "Hisaab Desk · Hisaab, ab AI se.",
  description:
    "Aap ka AI munshi. Forward bills, parchis and quotations on WhatsApp. AI reads them, you check, your books stay sorted. Join the waitlist.",
  openGraph: {
    title: "Hisaab Desk · Hisaab, ab AI se.",
    description: "AI finance desk for Pakistani business. Join the Founding 100 waitlist.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF4E6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} ${nastaliq.variable}`}>{children}</body>
    </html>
  );
}
