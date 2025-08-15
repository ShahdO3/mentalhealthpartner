"use client";
import Image from "next/image";
import { Inter } from 'next/font/google'
import NavBar from "./components/NavBar";
import FeelingInput from "./components/FeelingInput";
import { Background, Column, Particle, RevealFx, Row, TiltFx } from "@once-ui-system/core";
import Badge from "./components/Badge";
import CodeMockUp from "./components/CodeMockUp";
import IntroText from "./components/IntroText";

// REMOVE THIS TO USE OTHER FONT
//  const inter = Inter({
//    subsets: ['latin'],
//   //  display: 'swap',
//    variable: '--font-inter' 
//   })


export default function Home() {
  return (
    // REMOVE THIS TO USE OTHER FONT <main className={inter.className}>
    <main>
      <div>
        <RevealFx translateY={0.5}>
          <NavBar/>
          <div className="grid grid-cols-3">
            <IntroText/>
            <Badge/>
            <TiltFx radius="xl-4">
              <Image
              src="/mentalHealth.png"
              alt="d"
              width={200}
              height={200}
              />
            </TiltFx>
          </div>
          <FeelingInput/>
        </RevealFx>
      </div>
    </main>
  );
}
