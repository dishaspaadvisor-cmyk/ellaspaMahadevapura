"use client";
import { FiEye } from "react-icons/fi";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`service-card ${isVisible ? "service-card-visible" : ""
        }`}
      style={{
        "--card-delay": `${index * 140}ms`,
      }}
    >
      {/* IMAGE */}
      <div className="service-image-wrapper">
        <img
          src={service.image}
          alt={service.imageAlt || service.title}
          className="service-image"
          loading={index < 4 ? "eager" : "lazy"}
        />

        <div className="service-image-overlay" />
      </div>

      {/* CONTENT */}
      <div className="service-card-content">

        {/* TITLE + DURATION */}
        <div className="service-card-heading">
          <h2 className="service-card-title">
            {service.title}
          </h2>

          {service.duration && (
            <span className="service-duration">
              {service.duration}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        {service.shortDescription && (
          <p className="service-card-description">
            {service.shortDescription}
          </p>
        )}

        {/* VIEW BUTTON */}
        <div className="service-card-footer">
          <Link
            href={`/services/${service.id}`}
            className="service-card-link"
            aria-label={`View ${service.title}`}
          >
            <span>View Services</span>

            <span className="service-arrow" aria-hidden="true">
              <FiEye />
            </span>
          </Link>
        </div>

      </div>
    </article>
  );
}