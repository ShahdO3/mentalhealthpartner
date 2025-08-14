import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa } from "next/font/google";
import localFont from 'next/font/local'
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
  
const kasepi = localFont({
  src: 'fonts/Kasepi-Sans.ttf',
  variable:'--font-kasepi',
})

export const metadata: Metadata = {
  title: "SoulSpark",
  description: "Brought to you by Shadow Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="forest" lang="en">
      <body
        className={kasepi.className}
      >
        {children}
      </body>
    </html>
  );
}
