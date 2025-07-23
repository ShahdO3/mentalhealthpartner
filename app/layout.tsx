import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const changa = Changa({
   subsets: ['latin'],
  //  display: 'swap',
   variable: '--font-changa' 
  })

export const metadata: Metadata = {
  title: "SoulSpark",
  description: "Your Mental Health Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="forest" lang="en">
      <body
        className={changa.className}
      >
        {children}
      </body>
    </html>
  );
}
