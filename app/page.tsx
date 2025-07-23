import Image from "next/image";
import { Inter } from 'next/font/google'
import NavBar from "./components/NavBar";

const inter = Inter({
   subsets: ['latin'],
  //  display: 'swap',
   variable: '--font-inter' 
  })


export default function Home() {
  return (
    <main className={inter.className}>
      <NavBar/>
    </main>
  );
}
