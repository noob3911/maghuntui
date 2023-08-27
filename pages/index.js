import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main className="relative ">
         <Navbar />
         <Hero />
         <section></section>
         <section></section>
      </main>
   );
}
