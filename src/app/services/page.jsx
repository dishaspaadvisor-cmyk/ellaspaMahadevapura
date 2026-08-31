"use client";

import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

import { servicesData } from "@/Data/servicesData";
import { siteData } from "@/Data/siteData";

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        brand={siteData.brand}
        links={siteData.navbar.links}
        button={siteData.navbar.button}
      />


      {/* =================================================
          PAGE HERO
      ================================================= */}

      <section className="services-page-hero">

        <div className="services-page-hero-inner">

          {/* EYEBROW */}

          <span className="services-page-eyebrow">
            / OUR SERVICES
          </span>


          {/* TITLE */}

          <h1 className="services-page-title">

            {servicesData.page.title}

            <br />

            <em>
              {servicesData.page.titleAccent}
            </em>

          </h1>


          {/* DESCRIPTION */}

          <p className="services-page-description">
            {servicesData.page.description}
          </p>


          {/* HERO LINE */}

          <div className="services-page-line" />

        </div>

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        className="services-page-list"
        id="services-grid"
      >

        <div className="services-page-list-inner">

          {/* SECTION HEADER */}

          <div className="services-page-list-header">

            <span>
              {servicesData.page.eyebrow}
            </span>

            <p>
              {servicesData.items.length} wellness
              experiences
            </p>

          </div>


          {/* SERVICE GRID */}

          <div className="services-grid">

            {servicesData.items.map(
              (service, index) => (

                <ServiceCard
                  key={
                    service.id ||
                    index
                  }
                  service={service}
                  index={index}
                />

              )
            )}

          </div>

        </div>

      </section>

    </main>
  );
}