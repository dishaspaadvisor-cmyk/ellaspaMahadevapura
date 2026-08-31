import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";


import {

  siteData,
} from "@/Data/siteData";
import { footerData } from "@/Data/footerData";
import OfferPopup from "@/components/OfferPopup";


/* =====================================================
   FONTS
===================================================== */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


/* =====================================================
   METADATA
===================================================== */

/* =====================================================
   METADATA
===================================================== */

export const metadata = {
  title:
    siteData.seo?.title ||
    "Ovia Wellness Spa | Best Spa & Massage in Thrissur",

  description:
    siteData.seo?.description ||
    "Ovia Wellness offers premium spa, massage and wellness experiences near Patturaikkal Junction, Shoranur Road, Thrissur, Kerala.",
      /* =====================================================
     FAVICON
  ===================================================== */

  icons: {
    icon: [
      {
        url: "/logos/logo.png",
        type: "image/png",
      },
    ],

    shortcut: "/logos/logo.png",

    apple: "/logos/logo.png",
  },


  keywords: [
    /* Core Spa Keywords */
    "spa near me",
    "spa in Thrissur",
    "massage spa Thrissur",
    "massage spa near me",
    "spa near Patturaikkal",
    "spa near Patturaikkal Junction",
    "spa near Shoranur Road",
    "spa in Patturakkal",
    "spa in Thrissur Kerala",
    "massage service in Thrissur",
    "best massage spa Thrissur",
    "best spa in Thrissur",
    "best massage in Thrissur",
    "massage center in Thrissur",
    "massage spa center near me",
    "body massage spa in Thrissur",
    "body massage center Thrissur",
    "body spa near me",
    "body spa in Thrissur",
    "best body spa near me",
    "best body massage near me",
    "find massage places near me",
    "nearest spa centre",
    "nearby spa massage",
    "nearby spa center",
    "spa wellness center near me",
    "local spa treatments near me",
    "spa and massage services",
    "luxury spa near me",
    "luxury spa in Thrissur",
    "luxury massage spa",
    "premium spa Thrissur",
    "relaxation spa Thrissur",
    "spa experience Thrissur",
    "spa days near me",

    /* Massage Services */
    "Swedish massage Thrissur",
    "deep tissue massage Thrissur",
    "Thai massage Thrissur",
    "aromatherapy massage Thrissur",
    "foot reflexology Thrissur",
    "head and shoulder massage Thrissur",
    "couples massage Thrissur",
    "couples spa Thrissur",
    "couple massage in Thrissur",
    "full body massage Thrissur",
    "relaxation massage Thrissur",
    "professional massage Thrissur",
    "wellness massage Thrissur",

    /* Location-Based Searches */
    "spa near Patturaikkal Junction Thrissur",
    "massage near Patturaikkal Junction",
    "spa near City Tower Thrissur",
    "massage near City Tower Thrissur",
    "spa Shoranur Road Thrissur",
    "massage Shoranur Road Thrissur",
    "spa near me Patturaikkal",
    "massage near me Patturaikkal",

    /* Local Area */
    "spa Patturakkal Thrissur",
    "massage Patturakkal Thrissur",
    "spa Thrissur Corporation",
    "massage Thrissur Corporation",
    "wellness center Thrissur",
  ],

  alternates: {
    canonical: "https://example.com",
  },

  openGraph: {
    title:
      "Ovia Wellness Spa | Premium Spa & Massage in Thrissur",

    description:
      "Premium spa, massage and wellness experiences at City Tower near Patturaikkal Junction, Shoranur Road, Thrissur, Kerala.",

    type: "website",
    locale: "en_IN",
  },
};


/* =====================================================
   ROOT LAYOUT
===================================================== */

export default function RootLayout({
  children,
}) {

  return (

    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
      `}
      data-scroll-behavior="smooth"
    >

      <body>


        {/* ==========================================
            GLOBAL NAVBAR
        ========================================== */}

        <Navbar
          brand={
            siteData.brand
          }

          links={
            siteData.navbar.links
          }

          button={
            siteData.navbar.button
          }
        />


        {/* ==========================================
            PAGE CONTENT
        ========================================== */}

        {children}


        {/* ==========================================
            GLOBAL FOOTER
        ========================================== */}

        <Footer
          footer={{
            ...footerData,

            /*
             * Central brand data
             */

            brand:
              siteData.brand,


            /*
             * Central contact data
             */

            contact: {

              ...footerData.contact,

              phone:
                siteData.contact.phone,

              whatsapp:
                siteData.contact.whatsapp,

              whatsappUrl:
                siteData.contact.whatsappUrl ||
                `https://wa.me/${siteData.contact.whatsapp}`,

            },

          }}
        />


        {/* ==========================================
            FLOATING CALL + WHATSAPP BUTTONS
        ========================================== */}

        <FloatingButtons/>


        {/* ==========================================
            GLOBAL ₹1,999 OFFER POPUP
        ========================================== */}

       <OfferPopup />


      </body>

    </html>

  );

}