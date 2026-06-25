import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afsar Designer Tailor | Custom Menswear Since 2003 | Delhi",
  description:
    "Bespoke suits, sherwanis and blazers crafted by hand for 23 years. Doorstep fitting service across Delhi. G-114, Seelampur Market.",
  keywords: [
    "custom tailor delhi",
    "bespoke suits seelampur",
    "mens sherwani delhi",
    "doorstep tailor delhi",
    "wedding suits delhi",
    "jodhpuri suits delhi",
    "indo western delhi",
  ],
  openGraph: {
    title: "Afsar Designer Tailor | Custom Menswear Since 2003",
    description:
      "Bespoke suits, sherwanis and blazers. Doorstep fitting across Delhi.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
