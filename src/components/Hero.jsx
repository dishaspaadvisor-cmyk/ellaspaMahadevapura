"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useState,
} from "react";

export default function Hero({ hero }) {

  const slides = hero?.slides || [];

  const [activeSlide, setActiveSlide] =
    useState(0);

  const [isChanging, setIsChanging] =
    useState(false);


  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {

    if (slides.length <= 1) return;

    const timer = setInterval(() => {

      changeSlide(
        (activeSlide + 1) %
          slides.length
      );

    }, 7000);

    return () =>
      clearInterval(timer);

  }, [
    activeSlide,
    slides.length,
  ]);


  /* =====================================================
     CHANGE SLIDE
  ===================================================== */

  const changeSlide = (index) => {

    if (index === activeSlide) return;

    setIsChanging(true);

    setTimeout(() => {

      setActiveSlide(index);

      setIsChanging(false);

    }, 180);
  };


  /* =====================================================
     CURRENT SLIDE
  ===================================================== */

  const current =
    slides[activeSlide];


  if (!current) {
    return null;
  }


  return (
    <section
      className="hero"
      id="home"
    >

      {/* =================================================
          BACKGROUND SLIDES
      ================================================= */}

      <div
        className="hero-background"
        aria-hidden="true"
      >

        {slides.map(
          (slide, index) => (

            <div
              key={slide.image}
              className={`
                hero-slide-image
                ${
                  index === activeSlide
                    ? "hero-slide-active"
                    : ""
                }
              `}
            >

              <Image
                src={slide.image}
                alt=""
                fill
                priority={
                  index === 0
                }
                sizes="100vw"
                className="hero-image"
              />

            </div>

          )
        )}

      </div>


    


      {/* =================================================
          DECORATIVE GLOW
      ================================================= */}

      <div
        className="hero-glow"
        aria-hidden="true"
      />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="hero-container">

        <div
          className={`
            hero-content
            ${
              isChanging
                ? "hero-content-changing"
                : ""
            }
          `}
          key={activeSlide}
        >

          {/* EYEBROW */}

          {current.eyebrow && (

            <p
              className="
                hero-eyebrow
                hero-pop-right
              "
            >
              {current.eyebrow}
            </p>

          )}


          {/* TITLE */}

          <h1
            className="
              hero-title
              hero-pop-right
              hero-delay-1
            "
          >

            {current.title}

            <span>
              {current.titleAccent}
            </span>

          </h1>




          {/* BUTTONS */}

          <div
            className="
              hero-actions
              hero-pop-right
              hero-delay-3
            "
          >

            <Link
              href={
                current.primaryButton.href
              }
              className="hero-primary-button"
            >

              <span>
                {
                  current.primaryButton
                    .label
                }
              </span>

              <span
                className="
                  hero-button-arrow
                "
              >
                ↗
              </span>

            </Link>


            <Link
              href={
                current.secondaryButton
                  .href
              }
              className="
                hero-secondary-button
              "
            >

              {
                current.secondaryButton
                  .label
              }

            </Link>

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM AREA
      ================================================= */}

      <div className="hero-bottom">

        {/* =================================================
            STATS
        ================================================= */}

        <div
          className="
            hero-stats
            hero-pop-bottom
            hero-delay-4
          "
          key={`stats-${activeSlide}`}
        >

          {current.stats.map(
            (stat) => (

              <div
                className="hero-stat"
                key={stat.label}
              >

                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>

              </div>

            )
          )}

        </div>


        {/* =================================================
            SLIDER NAVIGATION
        ================================================= */}

        <div
          className="
            hero-slider-navigation
            hero-pop-bottom
            hero-delay-5
          "
        >

          <div className="hero-slider-counter">

            <span>
              {String(
                activeSlide + 1
              ).padStart(2, "0")}
            </span>

            <span className="hero-counter-line" />

            <span>
              {String(
                slides.length
              ).padStart(2, "0")}
            </span>

          </div>


          <div className="hero-slider-dots">

            {slides.map(
              (slide, index) => (

                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Go to slide ${
                    index + 1
                  }`}
                  aria-current={
                    index === activeSlide
                  }
                  onClick={() =>
                    changeSlide(index)
                  }
                  className={`
                    hero-slider-dot
                    ${
                      index ===
                      activeSlide
                        ? "active"
                        : ""
                    }
                  `}
                >

                  <span />

                </button>

              )
            )}

          </div>

        </div>


        {/* =================================================
            SCROLL
        ================================================= */}

        <Link
          href={hero.scroll.href}
          className="
            hero-scroll
            hero-pop-bottom
            hero-delay-5
          "
        >

          <span
            className="
              hero-scroll-line
            "
          />

          <span>
            {hero.scroll.label}
          </span>

        </Link>

      </div>


      {/* =================================================
          PREVIOUS / NEXT
      ================================================= */}

      {slides.length > 1 && (

        <div className="hero-arrows">

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              changeSlide(
                (activeSlide -
                  1 +
                  slides.length) %
                  slides.length
              )
            }
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() =>
              changeSlide(
                (activeSlide + 1) %
                  slides.length
              )
            }
          >
            →
          </button>

        </div>

      )}

    </section>
  );
}