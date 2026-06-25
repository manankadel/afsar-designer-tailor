"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    number: "01",
    title: "Bespoke Suits",
    desc: "Three-piece, two-piece, double-breasted. Pick your fabric, your lapel, your lining. We build it around your body, not a mannequin.",
    price: "From ₹5,000",
  },
  {
    number: "02",
    title: "Sherwanis",
    desc: "Wedding-ready, embroidered, Mughal-style. Hand-worked thread and mirror detailing that photographs better than it renders on any screen.",
    price: "Custom Quote",
  },
  {
    number: "03",
    title: "Blazers & Jodhpuri",
    desc: "The jacket that makes the jeans look expensive. Structured shoulders, clean chest, and a back panel that actually moves with you.",
    price: "From ₹5,500",
  },
  {
    number: "04",
    title: "Indo-Western",
    desc: "When the event says traditional but your taste says modern. Asymmetric cuts, mandarin collars, and fabrics that hold a room.",
    price: "Custom Quote",
  },
  {
    number: "05",
    title: "Formal Shirts",
    desc: "Collar that sits. Cuffs that break right. No bunching at the waist. The kind of shirt you stop tucking back in.",
    price: "From ₹2,000",
  },
  {
    number: "06",
    title: "Doorstep Fitting",
    desc: "We show up. You stand still. Thirty measurements, fabric selection at your place, and the finished piece delivered to your hands.",
    price: "Free with Order",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection>
          <span className="text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-medium">
            The Craft
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">
            What we <span className="italic text-[#c8a97e]">make.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#2a2a2a]">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(200,169,126,0.04)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#0d0d0d] p-6 md:p-8 h-full flex flex-col cursor-default group"
              >
                <span className="text-[#2a2a2a] text-xs tracking-widest font-medium group-hover:text-[#c8a97e] transition-colors duration-500">
                  {service.number}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mt-3 group-hover:text-[#c8a97e] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#a09888] leading-relaxed flex-1">
                  {service.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex justify-between items-center">
                  <span className="text-xs tracking-widest text-[#c8a97e] uppercase">
                    {service.price}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#2a2a2a] group-hover:text-[#c8a97e] group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
