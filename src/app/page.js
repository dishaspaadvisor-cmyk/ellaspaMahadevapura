import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import GalleryCard from "@/components/GalleryCard";
import OfferCard from "@/components/OfferCard";
import FAQ from "@/components/FAQ";

import Link from "next/link";

import { galleryData } from "@/Data/galleryData";
import { offersData } from "@/Data/offerdata";
import AboutPage from "./about/page";
import ContactCard from "@/components/ContactCard";
import { servicesData } from "@/Data/servicesData";
import { siteData } from "@/Data/siteData";
import { faqData } from "@/Data/faqdata";




export default function Home() {

  return (

    <main id="home">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          HERO
      ================================================= */}

      <Hero
        hero={siteData.hero}
      />


      {/* =================================================
          SERVICES
      ================================================= */}
      <section
        id="services"
        className="home-services"
      >
        {/* SERVICES HEADING */}

        <div className="home-services-heading">

          <span>
            {servicesData.page.eyebrow}
          </span>

          <h2>
            {servicesData.page.title}

            <br />

            <em>
              {servicesData.page.titleAccent}
            </em>
          </h2>

          <p>
            {servicesData.page.description}
          </p>

        </div>


        {/* FIRST 9 SERVICE CARDS */}

        <div
          id="services-grid"
          className="services-grid"
        >

          {servicesData.items
            .slice(0, 9)
            .map((service, index) => (
              <ServiceCard
                key={service.id || index}
                service={service}
                index={index}
              />
            ))}

        </div>


        {/* SERVICES BUTTON */}

        <div
          className="home-services-button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding:"20px " 
           
          }}
        >

          <Link
            href="/services"
            className="home-section-button "
          >

            <span>
              Explore All Services
            </span>

            <span>
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* about page */}
      <AboutPage />



      {/* =================================================
          GALLERY
      ================================================= */}

      <section
        id="gallery"
        className="home-gallery"
      >

        {/* GALLERY HEADING */}

        <div className="home-gallery-heading">

          <span className="gallery-eyebrow">

            {galleryData.page.eyebrow}

          </span>


          <h2 className="gallery-title">

            {galleryData.page.title}

            <br />

            <em>
              {galleryData.page.titleAccent}
            </em>

          </h2>


          <p className="gallery-description">

            {galleryData.page.description}

          </p>

        </div>


        {/* GALLERY GRID */}

        <div className="gallery-grid">

          {galleryData.images.map(
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


        {/* FULL GALLERY BUTTON */}

        <div className="home-gallery-button">

          <Link
            href="/gallery"
            className="gallery-cta-button "
          >

            <span className="text-black">
              View Full Gallery
            </span>

            <span>
              ↗
            </span>

          </Link>

        </div>

      </section>



      {/* =================================================
          OFFERS
      ================================================= */}

      <section
        id="offers"
        className="home-offers"
      >

        {/* OFFERS HEADING */}

        <div
          className="home-offers-heading"
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >

          <span
            className="offers-eyebrow"
            style={{
              display: "block",
              textAlign: "center",
            }}
          >
            {offersData.page.eyebrow}
          </span>


          <h2
            className="offers-title"
            style={{
              textAlign: "center",
              margin: "0 auto",
            }}
          >

            {offersData.page.title}

            <br />

            <em>
              {offersData.page.titleAccent}
            </em>

          </h2>


          <p
            className="offers-description"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "600px",
            }}
          >
            {offersData.page.description}
          </p>

        </div>


        {/* OFFER CARDS */}

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


        {/* OFFERS BUTTON */}

        <div
          className="home-offers-button"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding:"20px",
          }}
        >

          <Link
            href="/offers"
            className="home-section-button"
          >

            <span>
              View All Offers
            </span>

            <span>
              ↗
            </span>

          </Link>

        </div>

      </section>

      <FAQ
        data={faqData}
      />


      <ContactCard />

    </main>

  );
}