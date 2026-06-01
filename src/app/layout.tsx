import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "島内洋平 | Webクリエイター・フロントエンド",
  description:
    "佐賀県在住のWebクリエイター・島内洋平のポートフォリオ。コーポレートサイト・LP・WordPress実装の実務経験をベースに、Next.js・Tailwind CSS・microCMSなどモダンな技術での制作に取り組んでいます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
