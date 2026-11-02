import Navbar from "@/components/Navbar";
import GalleryCard from "@/components/GalleryCard";

import { galleryData } from "@/Data/galleryData";
import { siteData } from "@/Data/siteData";


/* =====================================================
   GALLERY PAGE METADATA
===================================================== */

export const metadata = {
  title:
    "Spa Galleryin Mahadevapura | Ella Spa & Massage",

  description:
    "Explore the Ella Spa galleryin Mahadevapura,  Bengaluru. View our peaceful spa atmosphere, massage spaces and wellness experience near Patturaikkal Junction.",

  keywords: [
    /* Core Gallery */
    "spa gallery Mahadevapura",
    "spa photos Mahadevapura",
    "spa images Mahadevapura",
    "massage spa gallery",
    "wellness spa gallery",
    "spa interior Mahadevapura",
    "luxury spa photos",
    "premium spa gallery",
    "spa experience photos",
    "massage center photos",

    /* Local SEO */
    "spain Mahadevapura",
    "spa near me",
    "spa near Patturaikkal",
    "spa near Patturaikkal Junction",
    "spa near Shoranur Road",
    "spa in Patturakkal",
    "spain Mahadevapura  Bengaluru",
    "massage spa Mahadevapura",
    "massage spa near me",
    "best spain Mahadevapura",
    "best massage spa Mahadevapura",
    "massage centerin Mahadevapura",
    "body massage spain Mahadevapura",
    "luxury spain Mahadevapura",
    "premium spa Mahadevapura",
    "relaxation spa Mahadevapura",
    "spa experience Mahadevapura",
    "wellness center Mahadevapura",
    "spa wellness center near me",

    /* Services */
    "Swedish massage Mahadevapura",
    "deep tissue massage Mahadevapura",
    "Thai massage Mahadevapura",
    "aromatherapy massage Mahadevapura",
    "foot reflexology Mahadevapura",
    "head and shoulder massage Mahadevapura",
    "couples massage Mahadevapura",
    "couples spa Mahadevapura",
    "full body massage Mahadevapura",
    "relaxation massage Mahadevapura",
    "professional massage Mahadevapura",
    "wellness massage Mahadevapura",

    /* Nearby Search */
    "spa near City Tower Mahadevapura",
    "massage near City Tower Mahadevapura",
    "spa near Patturaikkal Junction Mahadevapura",
    "massage near Patturaikkal Junction",
    "spa Shoranur Road Mahadevapura",
    "massage Shoranur Road Mahadevapura",
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
      "https://example.com/gallery",
  },

  /* =====================================================
     OPEN GRAPH
  ===================================================== */

  openGraph: {
    title:
      "Spa Galleryin Mahadevapura | ELLA SPA",

    description:
      "Explore the Ella Spa gallery and discover our peaceful massage and wellness environmentin Mahadevapura,  Bengaluru.",

    url:
      "https://example.com/gallery",

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
          "Ella Spa interior and wellness experiencein Mahadevapura",
      },
    ],
  },

  /* =====================================================
     TWITTER
  ===================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Spa Galleryin Mahadevapura | ELLA SPA",

    description:
      "Explore the Ella Spa, massage and wellness galleryin Mahadevapura,  Bengaluru.",

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
   GALLERY PAGE
===================================================== */

export default function GalleryPage() {

  const {
    page,
    images,
  } = galleryData;


  return (
    <main className="gallery-page">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          GALLERY INTRO
      ================================================= */}

      <section className="gallery-intro">

        <div className="gallery-intro-inner">

          <span className="gallery-eyebrow">
            {page.eyebrow}
          </span>


          <h1 className="gallery-title">

            {page.title}

            <br />

            <em>
              {page.titleAccent}
            </em>

          </h1>


          <p className="gallery-description">
            {page.description}
          </p>


        </div>

      </section>


      {/* =================================================
          GALLERY
      ================================================= */}

      <section className="gallery-section">

        <div className="gallery-grid">

          {images.map(
            (item, index) => (

              <GalleryCard
                key={
                  item.id ||
                  index
                }

                image={
                  item.image
                }

                alt={
                  item.alt
                }

                title={
                  item.title
                }

                category={
                  item.category
                }

                number={
                  item.number ||
                  String(
                    item.id ||
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )
                }

                index={
                  index
                }
              />

            )
          )}

        </div>

      </section>


      {/* =================================================
          GALLERY CTA
      ================================================= */}

      <section className="gallery-cta">

        <div className="gallery-cta-inner">

          <span className="gallery-eyebrow">
            / YOUR WELLNESS MOMENT
          </span>


          <h2 className="gallery-cta-title">

            Come in.

            <br />

            <em>
              Slow down.
            </em>

          </h2>


          <p>
            Discover a calm and thoughtful
            wellness experience created
            around youin Mahadevapura.
          </p>


          <a
            href="/services"
            className="gallery-cta-button"
          >

            <span>
              Explore Services
            </span>

            <span>
              ↗
            </span>

          </a>

        </div>

      </section>


    </main>
  );
}