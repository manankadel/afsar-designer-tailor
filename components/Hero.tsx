"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP = "https://wa.me/918368234896?text=Hi%2C%20I%27d%20like%20to%20book%20a%20fitting";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=80&auto=format&fit=crop"
          alt="Bespoke suit on mannequin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-5 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4"
        >
          <span className="text-[#c8a97e] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
            Est. 2003 &middot; Seelampur, Delhi
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight"
          >
            Not Off
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight"
          >
            The <span className="italic text-[#c8a97e]">Rack.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 md:mt-8 text-[#a09888] text-base md:text-lg max-w-md leading-relaxed"
        >
          23 years of hand-cut, hand-stitched menswear.
          We come to your door, measure you up, and build it from scratch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3.5 bg-[#c8a97e] text-[#0a0a0a] text-xs font-semibold tracking-widest uppercase hover:bg-[#ddc9a3] transition-all duration-300"
          >
            Book Your Fitting
          </a>
          <a
            href="#collection"
            className="px-7 py-3.5 border border-[#2a2a2a] text-[#f5f0e8] text-xs font-semibold tracking-widest uppercase hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all duration-300"
          >
            See the Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#c8a97e] to-transparent"
        />
      </motion.div>
    </section>
  );
}
