"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { siteData } from "@/Data/siteData";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero({ hero }) {
  const slides = hero?.slides || [];
  const defaultVideo = hero?.mobileVideo || "/hero/1.mp4";

  const mobileVideoRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setActiveSlide(
          (prev) => (prev + 1) % slides.length
        );

        setIsChanging(false);
      }, 180);
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  /* =====================================================
     MOBILE VIDEO AUTOPLAY
     
    iOS uses the Safari-compatible source when available.
  ===================================================== */

  useEffect(() => {
    const video = mobileVideoRef.current;

    if (!video) return;

    const source = video.querySelector("source");
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1);

    if (isIOS && source) {
      source.src = "/hero/1-ios.mp4";
    }

    const playVideo = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        await video.play();

        console.log(
          "✅ Mobile hero video is playing"
        );
      } catch (error) {
        console.log(
          "❌ Mobile hero video autoplay failed:",
          error
        );
      }
    };

    const handleLoadedMetadata = () => {
      playVideo();
    };

    const handleCanPlay = () => {
      playVideo();
    };

    const handleLoadedData = () => {
      playVideo();
    };

    const handleError = () => {
      if (source && source.src.endsWith("/1-ios.mp4")) {
        source.src = defaultVideo;
        video.load();
        playVideo();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    const handleUserInteraction = () => {
      playVideo();
    };

    video.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    video.addEventListener(
      "canplay",
      handleCanPlay
    );

    video.addEventListener(
      "loadeddata",
      handleLoadedData
    );

    video.addEventListener("error", handleError);

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    document.addEventListener(
      "touchstart",
      handleUserInteraction,
      { once: true, passive: true }
    );

    document.addEventListener(
      "pointerdown",
      handleUserInteraction,
      { once: true, passive: true }
    );

    // First attempt
    video.load();
    playVideo();

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      video.removeEventListener(
        "canplay",
        handleCanPlay
      );

      video.removeEventListener(
        "loadeddata",
        handleLoadedData
      );

      video.removeEventListener("error", handleError);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      document.removeEventListener(
        "touchstart",
        handleUserInteraction
      );

      document.removeEventListener(
        "pointerdown",
        handleUserInteraction
      );
    };
  }, [defaultVideo]);

  /* =====================================================
     CURRENT SLIDE
  ===================================================== */

  const current = slides[activeSlide];

  if (!current) {
    return null;
  }

  return (
    <section
      className="hero"
      id="home"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="hero-background"
        aria-hidden="true"
      >

        {/* =================================================
            DESKTOP IMAGE SLIDER
        ================================================= */}

        {slides.map((slide, index) => (
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
              priority={index === 0}
              sizes="100vw"
              className="
                hero-image
                hero-desktop-image
              "
            />
          </div>
        ))}

        {/* =================================================
            MOBILE BACKGROUND VIDEO

            The iOS-compatible source is selected at runtime.
        ================================================= */}

        <video
          ref={mobileVideoRef}
          className="hero-mobile-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={current.image}
          aria-hidden="true"
        >
          <source
            src={defaultVideo}
            type="video/mp4"
          />
        </video>

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

          {/* =================================================
              EYEBROW
          ================================================= */}

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

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              hero-title
              hero-pop-right
              hero-delay-1
            "
          >
            {current.title}

            {current.titleAccent && (
              <span>
                {current.titleAccent}
              </span>
            )}
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {current.description && (
            <p
              className="
                hero-description
                hero-pop-right
                hero-delay-2
              "
            >
              {current.description}
            </p>
          )}

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              hero-actions
              hero-pop-right
              hero-delay-3
            "
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "nowrap",
              width: "100%",
              marginTop: "auto",
            }}
          >

            {/* =================================================
                CALL BUTTON
            ================================================= */}

            <a
              href={`tel:${siteData.contact.phone}`}
              aria-label={`Call ${siteData.contact.phone}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",

                width: "160px",
                minHeight: "48px",

                padding: "12px 16px",

                backgroundColor: "#310a0a",
                color: "#ffffff",

                border: "1px solid #310a0a",
                borderRadius: "8px",

                textDecoration: "none",

                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "1",

                cursor: "pointer",

                transition:
                  "transform 0.25s ease, opacity 0.25s ease",

                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity =
                  "0.88";

                e.currentTarget.style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";

                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <FaPhoneAlt
                size={15}
                aria-hidden="true"
              />

              <span>Call Now</span>
            </a>

            {/* =================================================
                WHATSAPP BUTTON
            ================================================= */}

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",

                width: "160px",
                minHeight: "48px",

                padding: "12px 16px",

                backgroundColor: "#25D366",
                color: "#ffffff",

                border: "1px solid #25D366",
                borderRadius: "8px",

                textDecoration: "none",

                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "1",

                cursor: "pointer",

                transition:
                  "transform 0.25s ease, opacity 0.25s ease",

                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity =
                  "0.88";

                e.currentTarget.style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";

                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              <FaWhatsapp
                size={18}
                aria-hidden="true"
              />

              <span>WhatsApp</span>
            </a>

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

        {current.stats?.length > 0 && (
          <div
            className="
              hero-stats
              hero-pop-bottom
              hero-delay-4
            "
            key={`stats-${activeSlide}`}
          >
            {current.stats.map((stat) => (
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
            ))}
          </div>
        )}

        {/* =================================================
            SCROLL
        ================================================= */}

        {hero?.scroll && (
          <Link
            href={hero.scroll.href}
            className="
              hero-scroll
              hero-pop-bottom
              hero-delay-5
            "
          >
            <span className="hero-scroll-line" />

            <span>
              {hero.scroll.label}
            </span>
          </Link>
        )}

      </div>
    </section>
  );
}