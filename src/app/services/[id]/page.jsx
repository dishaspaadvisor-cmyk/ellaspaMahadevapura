import Link from "next/link";
import { notFound } from "next/navigation";
import { FiEye } from "react-icons/fi";
import { servicesData } from "@/Data/servicesData";

export async function generateStaticParams() {
  return servicesData.items.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const service = servicesData.items.find(
    (item) => item.id === id
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Premium Spa & Wellness`,
    description: service.description,
    keywords: [
      service.title,
      service.shortTitle,
      service.category,
      "spa massage",
      "wellness",
      "relaxation",
      "spa treatment",
    ],
    openGraph: {
      title: `${service.title} | Premium Spa & Wellness`,
      description: service.description,
      images: [
        {
          url: service.image,
          alt: service.imageAlt || service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;

  const service = servicesData.items.find(
    (item) => item.id === id
  );

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.items
    .filter((item) => item.id !== service.id)
    .filter((item) => item.category === service.category)
    .slice(0, 3);

  return (
    <main className="service-details-page">

      {/* HERO */}

      <section className="service-details-hero">

        <div className="service-details-hero-image">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
          />

          <div className="service-details-hero-overlay" />
        </div>

        <div className="service-details-hero-content">

          <Link
            href="/services"
            className="service-back-link"
          >
            ← Back to Services
          </Link>

          <span className="service-details-eyebrow">
            / {service.category}
          </span>

          <span className="service-details-number">
            {service.number}
          </span>

          <h1 className="service-details-title">
            {service.title}
          </h1>

          <p className="service-details-intro">
            {service.shortDescription}
          </p>

          <div className="service-details-meta">

            {service.duration && (
              <div className="service-meta-item">
                <span className="service-meta-label">
                  Duration
                </span>

                <span className="service-meta-value">
                  {service.duration}
                </span>
              </div>
            )}

            <div className="service-meta-item">
              <span className="service-meta-label">
                Category
              </span>

              <span className="service-meta-value">
                {service.category}
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* MAIN CONTENT */}

      <section className="service-details-content">

        <div className="service-details-container">

          {/* LEFT */}

          <div className="service-details-main">

            <span className="service-section-eyebrow">
              / THE EXPERIENCE
            </span>

            <h2>
              Relax. Restore.
              <span> Reconnect.</span>
            </h2>

            <div className="service-description">

              <p>
                {service.description}
              </p>

              <p>
                Every treatment is designed around a calm,
                comfortable environment where guests can
                disconnect from their daily routine and enjoy
                dedicated wellness time.
              </p>

              <p>
                Our approach focuses on creating a relaxing
                spa experience with professional service,
                attention to comfort and a peaceful atmosphere.
              </p>

            </div>

          </div>


          {/* RIGHT */}

          <aside className="service-details-sidebar">

            <div className="service-booking-card">

              <span className="service-card-eyebrow">
                / YOUR WELLNESS
              </span>

              <h3>
                Ready to relax?
              </h3>

              <p>
                Discover a personalized spa experience
                created around comfort and relaxation.
              </p>

              <div className="service-booking-buttons">

                <Link
                  href="/contact"
                  className="service-primary-button"
                >
                  Book Your Session
                  <span>↗</span>
                </Link>

                <Link
                  href="/services"
                  className="service-secondary-button"
                >
                  Explore Services
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* BENEFITS */}

      {service.benefits?.length > 0 && (
        <section className="service-benefits-section">

          <div className="service-benefits-container">

            <div className="service-benefits-heading">

              <span className="service-section-eyebrow">
                / WHY CHOOSE THIS
              </span>

              <h2>
                Designed for
                <span> your wellbeing.</span>
              </h2>

            </div>


            <div className="service-benefits-grid">

              {service.benefits.map(
                (benefit, index) => (
                  <div
                    className="service-benefit-card"
                    key={benefit}
                  >

                    <span className="service-benefit-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                      {benefit}
                    </h3>

                    <span className="service-benefit-arrow">
                      ↗
                    </span>

                  </div>
                )
              )}

            </div>

          </div>

        </section>
      )}



      {/* RELATED SERVICES */}

      {relatedServices.length > 0 && (
        <section className="related-services">

          <div className="related-services-container">

            <div className="related-services-heading">

              <div>
                <span className="service-section-eyebrow">
                  / YOU MAY ALSO LIKE
                </span>

                <h2>
                  Explore More
                  <span> Experiences</span>
                </h2>
              </div>

              <Link
                href="/services"
                className="related-all-link"
              >
                View All
                <span className="service-arrow" aria-hidden="true">
                  <FiEye />
                </span>
              </Link>

            </div>


            <div className="related-services-grid">

              {relatedServices.map(
                (relatedService) => (

                  <Link
                    href={`/services/${relatedService.id}`}
                    className="related-service-card"
                    key={relatedService.id}
                  >

                    <div className="related-service-image">

                      <img
                        src={relatedService.image}
                        alt={
                          relatedService.imageAlt ||
                          relatedService.title
                        }
                        loading="lazy"
                      />

                      <div className="related-service-overlay" />

                      <span className="related-service-number">
                        {relatedService.number}
                      </span>

                      <span className="related-service-arrow">
                        ↗
                      </span>

                    </div>

                    <div className="related-service-content">

                      <span>
                        {relatedService.category}
                      </span>

                      <h3>
                        {relatedService.title}
                      </h3>

                      <p>
                        {relatedService.shortDescription}
                      </p>

                    </div>

                  </Link>

                )
              )}

            </div>

          </div>

        </section>
      )}




    </main>
  );
}