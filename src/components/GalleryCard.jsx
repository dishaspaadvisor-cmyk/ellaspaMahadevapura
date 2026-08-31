"use client";

import { useEffect, useRef, useState } from "react";

export default function GalleryCard({
  image,
  alt,
  title,
  category,
  number,
  index = 0,
}) {
  const cardRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            /*
             * Start animation
             */
            setIsVisible(true);
          } else {
            /*
             * Reset animation when card
             * leaves viewport.
             *
             * When user scrolls back,
             * animation plays again.
             */
            setIsVisible(false);
          }
        },
        {
          threshold: 0.15,
          rootMargin:
            "0px 0px -60px 0px",
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
      className={`
        gallery-card
        ${isVisible ? "gallery-card-visible" : ""}
        gallery-card-${index + 1}
      `}
      style={{
        "--gallery-delay":
          `${(index % 3) * 120}ms`,
      }}
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="gallery-image-wrapper">

        <img
          src={image}
          alt={alt || title}
          className="gallery-image"
          loading={
            index < 3
              ? "eager"
              : "lazy"
          }
        />

        {/* IMAGE OVERLAY */}

        <div className="gallery-overlay" />


        {/* =================================================
            CARD CONTENT
        ================================================= */}


      </div>

    </article>
  );
}