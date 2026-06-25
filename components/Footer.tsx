"use client";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wider text-[#c8a97e]">
              AFSAR
            </span>
            <p className="text-xs text-[#a09888] mt-2 max-w-xs leading-relaxed">
              Custom menswear, handmade in Delhi since 2003.
              Every piece cut, stitched, and finished by hand.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/afsar_designer_tailor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center hover:border-[#c8a97e] transition-colors duration-300 group"
              >
                <svg className="w-4 h-4 text-[#a09888] group-hover:text-[#c8a97e] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="tel:+918368234896"
                className="w-9 h-9 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center hover:border-[#c8a97e] transition-colors duration-300 group"
              >
                <svg className="w-4 h-4 text-[#a09888] group-hover:text-[#c8a97e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
            <p className="text-[10px] text-[#555] tracking-wider">
              &copy; {new Date().getFullYear()} Afsar Designer Tailor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
