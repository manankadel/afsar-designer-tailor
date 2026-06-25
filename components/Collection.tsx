"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const CATEGORIES = ["All", "Suits", "Sherwanis", "Blazers", "Indo-Western"];

const ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=600&q=80&auto=format&fit=crop",
    title: "Navy Three-Piece",
    cat: "Suits",
    fabric: "Italian Wool Blend",
  },
  {
    src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&q=80&auto=format&fit=crop",
    title: "Charcoal Formal",
    cat: "Suits",
    fabric: "Premium Cotton",
  },
  {
    src: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=600&q=80&auto=format&fit=crop",
    title: "Embroidered Sherwani",
    cat: "Sherwanis",
    fabric: "Raw Silk",
  },
  {
    src: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=600&q=80&auto=format&fit=crop",
    title: "Velvet Dinner Jacket",
    cat: "Blazers",
    fabric: "Italian Velvet",
  },
  {
    src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80&auto=format&fit=crop",
    title: "Black Notch Lapel",
    cat: "Suits",
    fabric: "Merino Wool",
  },
  {
    src: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80&auto=format&fit=crop",
    title: "Classic Bandhgala",
    cat: "Indo-Western",
    fabric: "Jacquard",
  },
  {
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
    title: "Pinstripe Double-Breasted",
    cat: "Suits",
    fabric: "Worsted Wool",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop",
    title: "Burgundy Textured",
    cat: "Blazers",
    fabric: "Tweed Blend",
  },
];

export default function Collection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <section id="collection" className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <AnimatedSection>
              <span className="text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-medium">
                The Collection
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">
                Built to <span className="italic text-[#c8a97e]">wear,</span><br />
                not to hang.
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                    active === cat
                      ? "bg-[#c8a97e] text-[#0a0a0a] border-[#c8a97e]"
                      : "border-[#2a2a2a] text-[#a09888] hover:border-[#c8a97e] hover:text-[#c8a97e]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <motion.div layout className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-light">
                    {item.title}
                  </h3>
                  <p className="text-[10px] tracking-widest uppercase text-[#c8a97e] mt-1">
                    {item.fabric}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
