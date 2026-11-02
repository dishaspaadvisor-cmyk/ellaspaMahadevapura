"use client";

import { FiEye, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { siteData } from "@/Data/siteData";

export default function ServiceCard({ service, index }) {
  const router = useRouter();

  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

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

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     CONTACT DATA
  ===================================================== */

  const phoneNumber = siteData?.contact?.phone || "";
  const whatsappNumber = siteData?.contact?.whatsapp || "";

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to know more about ${service.title}.`
  );

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : "#";

  /* =====================================================
     SERVICE URL
  ===================================================== */

  const serviceUrl = `/services/${service.id}/`;

  /* =====================================================
     WHOLE CARD CLICK
  ===================================================== */

  const handleCardClick = () => {
    router.push(serviceUrl);
  };

  /* =====================================================
     STOP NAVIGATION FOR BUTTONS
  ===================================================== */

  const stopCardClick = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      ref={cardRef}
      className={`service-card ${
        isVisible ? "service-card-visible" : ""
      }`}
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      style={{
        "--card-delay": `${index * 140}ms`,
        cursor: "pointer",
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push(serviceUrl);
        }
      }}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="service-image-wrapper">
        <img
          src={service.image}
          alt={service.imageAlt || service.title}
          className="service-image"
          loading={index < 4 ? "eager" : "lazy"}
        />

        <div className="service-image-overlay" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

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

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <div
          className="service-card-footer"
          onClick={stopCardClick}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            marginTop: "15px",
          }}
        >
          {/* VIEW SERVICES */}

          <button
            type="button"
            className="service-card-link"
            aria-label={`View ${service.title}`}
            onClick={() => router.push(serviceUrl)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <span>View Services</span>

            <span
              className="service-arrow"
              aria-hidden="true"
            >
              <FiEye />
            </span>
          </button>

          {/* CALL NOW */}

          <a
            href={`tel:${phoneNumber}`}
            onClick={stopCardClick}
            aria-label={`Call ${service.title}`}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px 16px",
              borderRadius: "10px",
              backgroundColor: "#470c0c",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "1",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <FiPhone size={17} />

            <span>Call Now</span>
          </a>

          {/* WHATSAPP */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stopCardClick}
            aria-label={`WhatsApp ${service.title}`}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px 16px",
              borderRadius: "10px",
              backgroundColor: "#16a34a",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "1",
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <FaWhatsapp size={18} />

            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </article>
  );
}