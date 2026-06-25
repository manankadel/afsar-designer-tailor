"use client";

import AnimatedSection from "./AnimatedSection";

const STEPS = [
  {
    num: "01",
    title: "You Call",
    desc: "WhatsApp or ring us. Tell us what you need and when you need it. Wedding next month? Corporate event in a week? We work fast.",
  },
  {
    num: "02",
    title: "We Show Up",
    desc: "Our team comes to your place with fabric books, style references, and a measuring tape. 30 measurements. Takes 20 minutes.",
  },
  {
    num: "03",
    title: "We Build It",
    desc: "Your garment gets cut, stitched, and finished in our Seelampur workshop. Every seam checked. Every button secured by hand.",
  },
  {
    num: "04",
    title: "You Wear It",
    desc: "Delivered to your door. Try it on. If something needs tweaking, we fix it on the spot. You walk out ready.",
  },
];

export default function Process() {
  return (
    <section className="relative py-20 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection>
          <span className="text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-medium">
            How It Works
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">
            Your door.<br />
            <span className="italic text-[#c8a97e]">Your fit.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#2a2a2a]">
          {STEPS.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1} direction="up">
              <div className="bg-[#0d0d0d] p-6 md:p-8 h-full relative group">
                <span className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-light text-[#141414] group-hover:text-[#1a1a1a] transition-colors duration-500 absolute top-4 right-6">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <div className="w-8 h-[1px] bg-[#c8a97e] mb-6" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#a09888] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 p-6 md:p-8 bg-[#141414] border border-[#2a2a2a] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light">
                Doorstep service is <span className="text-[#c8a97e]">free</span> with every order.
              </h3>
              <p className="text-sm text-[#a09888] mt-1">
                No extra charge for home fittings across Delhi NCR.
              </p>
            </div>
            <a
              href="https://wa.me/918368234896?text=Hi%2C%20I%27d%20like%20to%20book%20a%20doorstep%20fitting"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 bg-[#c8a97e] text-[#0a0a0a] text-xs font-semibold tracking-widest uppercase hover:bg-[#ddc9a3] transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
