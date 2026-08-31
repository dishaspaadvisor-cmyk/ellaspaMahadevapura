import Navbar from "@/components/Navbar";
import GalleryCard from "@/components/GalleryCard";

import { galleryData } from "@/Data/galleryData";
import { siteData } from "@/Data/siteData";


/* =====================================================
   GALLERY PAGE METADATA
===================================================== */

export const metadata = {
  title:
    "Spa Gallery in Thrissur | Ovia Wellness Spa & Massage",

  description:
    "Explore the Ovia Wellness spa gallery in Thrissur, Kerala. View our peaceful spa atmosphere, massage spaces and wellness experience near Patturaikkal Junction.",

  keywords: [
    /* Core Gallery */
    "spa gallery Thrissur",
    "spa photos Thrissur",
    "spa images Thrissur",
    "massage spa gallery",
    "wellness spa gallery",
    "spa interior Thrissur",
    "luxury spa photos",
    "premium spa gallery",
    "spa experience photos",
    "massage center photos",

    /* Local SEO */
    "spa in Thrissur",
    "spa near me",
    "spa near Patturaikkal",
    "spa near Patturaikkal Junction",
    "spa near Shoranur Road",
    "spa in Patturakkal",
    "spa in Thrissur Kerala",
    "massage spa Thrissur",
    "massage spa near me",
    "best spa in Thrissur",
    "best massage spa Thrissur",
    "massage center in Thrissur",
    "body massage spa in Thrissur",
    "luxury spa in Thrissur",
    "premium spa Thrissur",
    "relaxation spa Thrissur",
    "spa experience Thrissur",
    "wellness center Thrissur",
    "spa wellness center near me",

    /* Services */
    "Swedish massage Thrissur",
    "deep tissue massage Thrissur",
    "Thai massage Thrissur",
    "aromatherapy massage Thrissur",
    "foot reflexology Thrissur",
    "head and shoulder massage Thrissur",
    "couples massage Thrissur",
    "couples spa Thrissur",
    "full body massage Thrissur",
    "relaxation massage Thrissur",
    "professional massage Thrissur",
    "wellness massage Thrissur",

    /* Nearby Search */
    "spa near City Tower Thrissur",
    "massage near City Tower Thrissur",
    "spa near Patturaikkal Junction Thrissur",
    "massage near Patturaikkal Junction",
    "spa Shoranur Road Thrissur",
    "massage Shoranur Road Thrissur",
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
      "Spa Gallery in Thrissur | Ovia Wellness",

    description:
      "Explore the Ovia Wellness spa gallery and discover our peaceful massage and wellness environment in Thrissur, Kerala.",

    url:
      "https://example.com/gallery",

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
          "Ovia Wellness spa interior and wellness experience in Thrissur",
      },
    ],
  },

  /* =====================================================
     TWITTER
  ===================================================== */

  twitter: {
    card: "summary_large_image",

    title:
      "Spa Gallery in Thrissur | Ovia Wellness",

    description:
      "Explore the Ovia Wellness spa, massage and wellness gallery in Thrissur, Kerala.",

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


          {/* LOCATION */}
          <p className="gallery-location">
            Ovia Wellness, City Tower,
            Near Patturaikkal Junction,
            Shoranur Road, Thrissur, Kerala
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
            around you in Thrissur.
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