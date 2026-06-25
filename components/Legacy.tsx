"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Legacy() {
  return (
    <section id="legacy" className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&auto=format&fit=crop"
                alt="Man in tailored suit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-8">
                  <div>
                    <div className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#c8a97e]">
                      <Counter target={23} />
                    </div>
                    <div className="text-xs tracking-widest uppercase text-[#a09888] mt-1">
                      Years
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#c8a97e]">
                      <Counter target={10} suffix="K" />
                    </div>
                    <div className="text-xs tracking-widest uppercase text-[#a09888] mt-1">
                      Garments
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#c8a97e]">
                      <Counter target={60} suffix="+" />
                    </div>
                    <div className="text-xs tracking-widest uppercase text-[#a09888] mt-1">
                      Fabrics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection delay={0.1}>
              <span className="text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-medium">
                The Legacy
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">
                One needle,<br />
                <span className="italic text-[#c8a97e]">one thread,</span><br />
                one standard.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-6 text-[#a09888] leading-relaxed text-base">
                Afsar started cutting fabric in a small Seelampur workshop in 2003.
                No investors, no marketing team, no social media playbook. Just a guy
                who could look at a man and know his measurements before the tape
                came out.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="mt-4 text-[#a09888] leading-relaxed text-base">
                Two decades later, the workshop grew. The hands multiplied. But the
                rule stayed the same: every stitch gets checked twice, every fit gets
                a second look, and nobody walks out in something that pulls at the
                shoulders.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mt-8 pt-8 border-t border-[#2a2a2a]">
                <p className="text-sm text-[#a09888] italic">
                  &ldquo;The suit should forget the tailor. It should only remember the man.&rdquo;
                </p>
                <p className="text-xs text-[#c8a97e] tracking-widest uppercase mt-2">
                  Afsar Ahmad, Founder
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
