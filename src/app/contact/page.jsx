import ContactCard from "../../components/ContactCard";


/* =====================================================
   CONTACT PAGE METADATA
===================================================== */

export const metadata = {
  title:
    "Contact ELLA SPA | Spa & Massagein Mahadevapura",

  description:
    "Contact Ella Spa in Mahadevapura,  Bengaluru for spa, massage and wellness services. Visit us near Patturaikkal Junction on Shoranur Road or call to book your experience.",

  keywords: [
    /* ================================================
       PRIMARY LOCAL KEYWORDS
    ================================================ */

    "spa near me",
    "spain Mahadevapura",
    "massage spain Mahadevapura",
    "massage spa near me",
    "best spain Mahadevapura",
    "best massage spa Mahadevapura",
    "massage centerin Mahadevapura",
    "body massage spain Mahadevapura",
    "luxury spain Mahadevapura",
    "luxury spa near me",
    "relaxation spa Mahadevapura",
    "spa wellness center near me",
    "wellness spa Mahadevapura",
    "spa and massage services Mahadevapura",

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
    "spa near City Tower Mahadevapura",
    "massage near City Tower Mahadevapura",
    "spa near Mahadevapura Corporation",
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

    "full body massage Mahadevapura",
    "Swedish massage Mahadevapura",
    "deep tissue massage Mahadevapura",
    "Thai massage Mahadevapura",
    "aromatherapy massage Mahadevapura",
    "foot reflexology Mahadevapura",
    "head and shoulder massage Mahadevapura",
    "couples massage Mahadevapura",
    "couples spa Mahadevapura",
    "relaxation massage Mahadevapura",
    "professional massage Mahadevapura",
    "massage therapy Mahadevapura",
    "sports massage Mahadevapura",
    "premium massage Mahadevapura",
    "premium spa Mahadevapura",

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
    "wellness experience Mahadevapura",
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
      "Contact ELLA SPA | Spa & Massagein Mahadevapura",

    description:
      "Get in touch with ELLA SPA for premium spa, massage and wellness experiencesin Mahadevapura,  Bengaluru. Conveniently located near Patturaikkal Junction.",

    url:
      "https://example.com/contact",

    siteName:
      "ELLA SPA",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/about/2.png",

        width: 1200,

        height: 630,

        alt:
          "Ella Spain Mahadevapura,  Bengaluru",
      },
    ],
  },


  /* =====================================================
     TWITTER
  ===================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Contact ELLA SPA | Spain Mahadevapura",

    description:
      "Contact ELLA SPA for spa, massage and wellness services near Patturaikkal Junction, Mahadevapura,  Bengaluru.",

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