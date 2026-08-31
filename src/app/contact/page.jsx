import ContactCard from "../../components/ContactCard";


/* =====================================================
   CONTACT PAGE METADATA
===================================================== */

export const metadata = {
  title:
    "Contact Ovia Wellness | Spa & Massage in Thrissur",

  description:
    "Contact Ovia Wellness in Thrissur, Kerala for spa, massage and wellness services. Visit us near Patturaikkal Junction on Shoranur Road or call to book your experience.",

  keywords: [
    /* ================================================
       PRIMARY LOCAL KEYWORDS
    ================================================ */

    "spa near me",
    "spa in Thrissur",
    "massage spa in Thrissur",
    "massage spa near me",
    "best spa in Thrissur",
    "best massage spa Thrissur",
    "massage center in Thrissur",
    "body massage spa in Thrissur",
    "luxury spa in Thrissur",
    "luxury spa near me",
    "relaxation spa Thrissur",
    "spa wellness center near me",
    "wellness spa Thrissur",
    "spa and massage services Thrissur",

    /* ================================================
       LOCATION KEYWORDS
    ================================================ */

    "spa near Patturaikkal",
    "spa near Patturaikkal Junction",
    "massage near Patturaikkal",
    "massage spa Patturaikkal",
    "spa near Shoranur Road",
    "massage near Shoranur Road",
    "spa in Patturakkal",
    "massage center Patturakkal",
    "spa near City Tower Thrissur",
    "massage near City Tower Thrissur",
    "spa near Thrissur Corporation",
    "wellness center near Patturaikkal",

    /* ================================================
       NEAR ME SEARCHES
    ================================================ */

    "nearest spa",
    "nearest spa centre",
    "nearest day spa",
    "nearby spa massage",
    "nearby spa center",
    "nearby massage center",
    "massage near me now",
    "find massage places near me",
    "best body massage near me",
    "best body spa near me",
    "body spa near me",
    "body massage center near me",
    "massage spa center near me",
    "local spa treatments near me",
    "spa days near me",

    /* ================================================
       SERVICE KEYWORDS
    ================================================ */

    "full body massage Thrissur",
    "Swedish massage Thrissur",
    "deep tissue massage Thrissur",
    "Thai massage Thrissur",
    "aromatherapy massage Thrissur",
    "foot reflexology Thrissur",
    "head and shoulder massage Thrissur",
    "couples massage Thrissur",
    "couples spa Thrissur",
    "relaxation massage Thrissur",
    "professional massage Thrissur",
    "massage therapy Thrissur",
    "sports massage Thrissur",
    "premium massage Thrissur",
    "premium spa Thrissur",

    /* ================================================
       GENERAL SEARCH TERMS
    ================================================ */

    "spa experience",
    "luxury spa",
    "relaxation spa",
    "body spa",
    "couples spa",
    "spa packages",
    "spa and massage services",
    "premium wellness experience",
    "wellness experience Thrissur",
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
      "https://example.com/contact",
  },


  /* =====================================================
     OPEN GRAPH
  ===================================================== */

  openGraph: {
    title:
      "Contact Ovia Wellness | Spa & Massage in Thrissur",

    description:
      "Get in touch with Ovia Wellness for premium spa, massage and wellness experiences in Thrissur, Kerala. Conveniently located near Patturaikkal Junction.",

    url:
      "https://example.com/contact",

    siteName:
      "Ovia Wellness",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/about/2.png",

        width: 1200,

        height: 630,

        alt:
          "Ovia Wellness Spa in Thrissur, Kerala",
      },
    ],
  },


  /* =====================================================
     TWITTER
  ===================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Ovia Wellness | Spa in Thrissur",

    description:
      "Contact Ovia Wellness for spa, massage and wellness services near Patturaikkal Junction, Thrissur, Kerala.",

    images: [
      "/about/2.png",
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
   CONTACT PAGE
===================================================== */

export default function ContactPage() {
  return (
    <main>
      <ContactCard />
    </main>
  );
}