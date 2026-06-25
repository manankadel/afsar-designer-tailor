"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Services from "@/components/Services";
import Collection from "@/components/Collection";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Legacy />
      <Services />
      <Collection />
      <Process />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
