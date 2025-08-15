import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { gsap } from "gsap";
import { IconProvider, LayoutProvider, ToastProvider } from "@once-ui-system/core";
import { HiHome } from "react-icons/hi2";
import BlobsBackground from "./components/BlobsBackground";


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
  
const poppins = localFont({
  src: 'fonts/Poppins-Medium.ttf',
  variable:'--font-poppins-medium',
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
    <html data-theme="mentalHealthDark" lang="en">
      <body
        className={poppins.className}>
        <LayoutProvider>
          <IconProvider>
            <ToastProvider>
              <BlobsBackground/>
              {children}
            </ToastProvider>
          </IconProvider>
        </LayoutProvider>
      </body>
    </html>
  );
}
