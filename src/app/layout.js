import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import OfferPopup from "@/components/OfferPopup";

import { siteData } from "@/Data/siteData";
import { footerData } from "@/Data/footerData";

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

export const metadata = {
  title:
    siteData.seo?.title ||
    "Ella Spa | Best Spa & Massage in Mahadevapura",

  description:
    siteData.seo?.description ||
    "Ella Spa offers premium spa, massage and wellness experiences near Mahadevapura, Bengaluru.",

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
    /* =====================================================
       CORE SPA KEYWORDS
    ===================================================== */

    "spa near me",
    "spa in Mahadevapura",
    "spa near Mahadevapura",
    "massage spa Mahadevapura",
    "massage spa near me",
    "massage near Mahadevapura",
    "best spa Mahadevapura",
    "best massage spa Mahadevapura",
    "best massage in Mahadevapura",
    "massage center Mahadevapura",
    "massage center near me",
    "massage spa center near me",
    "body massage spa Mahadevapura",
    "body massage center Mahadevapura",
    "body spa near me",
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
    "luxury spa Mahadevapura",
    "luxury massage spa",
    "premium spa Mahadevapura",
    "relaxation spa Mahadevapura",
    "spa experience Mahadevapura",
    "spa days near me",

    /* =====================================================
       MASSAGE SERVICES
    ===================================================== */

    "Swedish massage Mahadevapura",
    "deep tissue massage Mahadevapura",
    "Thai massage Mahadevapura",
    "aromatherapy massage Mahadevapura",
    "foot reflexology Mahadevapura",
    "head and shoulder massage Mahadevapura",
    "couples massage Mahadevapura",
    "couples spa Mahadevapura",
    "couple massage in Mahadevapura",
    "full body massage Mahadevapura",
    "relaxation massage Mahadevapura",
    "professional massage Mahadevapura",
    "wellness massage Mahadevapura",

    /* =====================================================
       LOCATION BASED SEARCHES
    ===================================================== */

    "spa near City Tower Mahadevapura",
    "massage near City Tower Mahadevapura",
    "spa near me Mahadevapura",
    "massage near me Mahadevapura",
    "spa Mahadevapura Bengaluru",
    "massage Mahadevapura Bengaluru",
    "wellness center Mahadevapura",
  ],

  alternates: {
    canonical: "https://example.com",
  },

  openGraph: {
    title:
      "Ella Spa | Premium Spa & Massage in Mahadevapura",

    description:
      "Premium spa, massage and wellness experiences near Mahadevapura, Bengaluru.",

    type: "website",
    locale: "en_IN",
  },
};

/* =====================================================
   ROOT LAYOUT
===================================================== */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
      `}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="google-site-verification" content="gK3fK-nwoqVMiQfi2DfictueUpuBopde69EkWvbc-_s" />

        {/* =================================================
            GOOGLE ADS / GTAG
        ================================================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16643117422"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'AW-16643117422');
          `}
        </Script>

      </head>

      <body>

        {/* ==========================================
            GLOBAL NAVBAR
        ========================================== */}

        <Navbar
          brand={siteData.brand}
          links={siteData.navbar.links}
          button={siteData.navbar.button}
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

            /* Central brand data */

            brand: siteData.brand,

            /* Central contact data */

            contact: {
              ...footerData.contact,

              phone: siteData.contact.phone,

              whatsapp: siteData.contact.whatsapp,

              whatsappUrl:
                siteData.contact.whatsappUrl ||
                `https://wa.me/${siteData.contact.whatsapp}`,
            },
          }}
        />

        {/* ==========================================
            FLOATING CALL + WHATSAPP BUTTONS
        ========================================== */}

        <FloatingButtons />

        {/* ==========================================
            GLOBAL ₹1,999 OFFER POPUP
        ========================================== */}

        <OfferPopup />

        {/* =================================================
            BOOKINGBOT TRACKER
        ================================================= */}

        <Script
          src="https://api.bookingbot.in/tracker.js"
          data-business-id="604"
          strategy="afterInteractive"
        />

        {/* =================================================
            BOOKINGBOT SPA CHATBOT
        ================================================= */}

        <Script
          id="bookingbot-spa-chatbot"
          strategy="afterInteractive"
        >
          {`
            (function () {
              const spaId = "604";

              const script = document.createElement("script");

              script.src =
                "https://chatbot.bookingbot.in/bot.js?spa=" + spaId;

              script.async = true;

              script.setAttribute("data-spa", spaId);

              document.head.appendChild(script);
            })();
          `}
        </Script>

      </body>
    </html>
  );
}