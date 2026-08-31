import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";

import { siteData } from "@/Data/siteData";
import { offersData } from "@/Data/offerdata";

/* =====================================================
   OFFERS PAGE METADATA
===================================================== */

export const metadata = {
  title:
    "Spa Offers in Thrissur | 25% Off Massage Offers | Ovia Wellness",

  description:
    "Discover special spa offers at Ovia Wellness in Thrissur, Kerala. Enjoy selected massage and wellness experiences with 25% special offers near Patturaikkal Junction.",

  keywords: [
    /* Location + Spa */
    "spa offers in Thrissur",
    "spa offers Thrissur",
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
    "massage center in Thrissur",
    "body massage spa in Thrissur",
    "luxury spa in Thrissur",
    "luxury spa near me",
    "premium spa Thrissur",
    "relaxation spa Thrissur",
    "spa experience Thrissur",
    "spa wellness center near me",

    /* Offers */
    "special spa offers",
    "spa special offers",
    "massage offers Thrissur",
    "massage discount Thrissur",
    "spa discount Thrissur",
    "25% off massage",
    "25% off spa",
    "massage deals Thrissur",
    "spa deals Thrissur",
    "special massage offers",
    "premium spa offers",
    "spa packages Thrissur",
    "massage spa offers near me",

    /* Massage */
    "full body massage Thrissur",
    "relaxation massage Thrissur",
    "professional massage Thrissur",
    "wellness massage Thrissur",
    "deep tissue massage Thrissur",
    "Thai massage Thrissur",
    "aromatherapy massage Thrissur",
    "couples massage Thrissur",
    "couples spa Thrissur",

    /* Featured Services */
    "Nuru Massage Thrissur",
    "B2B Massage Thrissur",
    "Body to Body Massage Thrissur",
    "Sandwich Massage Thrissur",
    "Happy Ending Massage Thrissur",
  ],

  /* =====================================================
     FAVICON
  ===================================================== */

  icons: {
    icon: [
      {
        url: "/logos/favbar.png",
        type: "image/png",
      },
    ],

    shortcut: "/logos/favbar.png",

    apple: "/logos/favbar.png",
  },

  /* =====================================================
     CANONICAL
  ===================================================== */

  alternates: {
    canonical:
      "https://example.com/offers",
  },

  /* =====================================================
     OPEN GRAPH
  ===================================================== */

  openGraph: {
    title:
      "Spa Offers in Thrissur | Special Massage Offers | Ovia Wellness",

    description:
      "Enjoy special spa and massage offers at Ovia Wellness in Thrissur, Kerala. Discover selected wellness experiences with special savings.",

    url:
      "https://example.com/offers",

    siteName:
      "Ovia Wellness",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/offer/nuru-massage.jpg",

        width: 1200,

        height: 630,

        alt:
          "Ovia Wellness spa offers in Thrissur, Kerala",
      },
    ],
  },

  /* =====================================================
     TWITTER
  ===================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Spa Offers in Thrissur | Ovia Wellness",

    description:
      "Discover special massage and wellness offers at Ovia Wellness in Thrissur, Kerala.",

    images: [
      "/offer/nuru-massage.jpg",
    ],
  },

  /* =====================================================
     ROBOTS
  ===================================================== */

  robots: {
    index: true,
    follow: true,
  },
};


/* =====================================================
   OFFERS PAGE
===================================================== */

export default function OffersPage() {
  return (
    <main className="offers-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="offers-intro">

        <div className="offers-intro-inner">

          <span className="offers-eyebrow">
            {offersData.page.eyebrow}
          </span>


          <h1 className="offers-title">

            {offersData.page.title}

            <br />

            <em>
              {offersData.page.titleAccent}
            </em>

          </h1>


          <p className="offers-description">
            {offersData.page.description}
          </p>


          {/* LOCATION */}
          {offersData.page.location && (
            <p className="offers-location">
              {offersData.page.location}
            </p>
          )}

        </div>

      </section>


      {/* =================================================
          OFFERS
      ================================================= */}

      <section className="offers-section">

        <div className="offers-grid">

          {offersData.items.map(
            (offer, index) => (

              <OfferCard
                key={
                  offer.id ||
                  index
                }

                offer={
                  offer
                }

                index={
                  index
                }

                phone={
                  siteData.contact.phone
                }

                whatsapp={
                  siteData.contact.whatsapp
                }

              />

            )
          )}

        </div>

      </section>

    </main>
  );
}