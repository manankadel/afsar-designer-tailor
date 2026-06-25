"use client";

import AnimatedSection from "./AnimatedSection";

const MAPS_URL = "https://maps.google.com/?q=G-114+Main+Road+Seelampur+Market+Near+Seelampur+Metro+Station+Delhi+110053";
const WHATSAPP = "https://wa.me/918368234896?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20custom%20tailoring";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <AnimatedSection>
              <span className="text-[#c8a97e] text-xs tracking-[0.3em] uppercase font-medium">
                Visit the Workshop
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-tight">
                Walk in.<br />
                <span className="italic text-[#c8a97e]">Walk out sharper.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#c8a97e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#f5f0e8]">Address</h4>
                    <p className="text-sm text-[#a09888] mt-1 leading-relaxed">
                      G-114, Main Road, Seelampur Market<br />
                      Near Seelampur Metro Station<br />
                      Delhi 110053
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#c8a97e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#f5f0e8]">Hours</h4>
                    <p className="text-sm text-[#a09888] mt-1 leading-relaxed">
                      Monday to Saturday: 10 AM to 11 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#c8a97e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#f5f0e8]">Phone</h4>
                    <a href="tel:+918368234896" className="text-sm text-[#c8a97e] mt-1 block hover:text-[#ddc9a3] transition-colors">
                      +91 83682 34896
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#20bd5a] transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#2a2a2a] text-[#f5f0e8] text-xs font-semibold tracking-widest uppercase hover:border-[#c8a97e] hover:text-[#c8a97e] transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2} direction="right">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.265!3d28.685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzA2LjAiTiA3N8KwMTUnNTQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Afsar Designer Tailor Location"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 border border-[#2a2a2a] pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
