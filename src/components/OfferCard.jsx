"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function OfferCard({
  offer,
  index = 0,
  phone = "",
  whatsapp = "",
}) {
  const cardRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     SCROLL REVEAL
     Replays every time card enters viewport
  ===================================================== */

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     CONTACT
  ===================================================== */

  const phoneNumber = phone || "";

  const whatsappNumber =
    whatsapp || phoneNumber.replace(/\D/g, "");

  const whatsappMessage =
    `Hello Ovia Wellness, I am interested in the ${offer.title}${offer.discount ? ` - ${offer.discount}` : ""
    } offer.`;

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`
    : "#";

  /* =====================================================
     INLINE STYLES
  ===================================================== */

  const styles = {
    card: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      boxSizing: "border-box",
      border: "1px solid rgba(23, 92, 90, 0.14)",
      background: "#ffffff",
      padding: "32px",
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "translateY(0)"
        : "translateY(40px)",
      transition:
        "opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${index * 140}ms`,
      boxShadow: isVisible
        ? "0 12px 35px rgba(23, 92, 90, 0.07)"
        : "none",
    },

    content: {
      width: "100%",
    },

    top: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      marginBottom: "22px",
    },

    number: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "0.12em",
      color: "#e68a20",
    },

    badges: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      gap: "8px",
    },

    label: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "30px",
      padding: "6px 11px",
      borderRadius: "999px",
      background: "#e68a20",
      color: "#ffffff",
      fontSize: "11px",
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      animation: isVisible
        ? "offerJello 0.9s both"
        : "none",
      animationDelay: `${index * 140 + 350}ms`,
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: "30px",
      padding: "6px 10px",
      border: "1px solid rgba(23, 92, 90, 0.15)",
      borderRadius: "999px",
      color: "#666666",
      background: "#fafafa",
      fontSize: "10px",
      lineHeight: 1,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },

    title: {
      margin: "0",
      color: "#173f3e",
      fontSize: "30px",
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.025em",
    },

    imageWrapper: {
      position: "relative",
      width: "100%",
      marginTop: "22px",
      overflow: "hidden",
      aspectRatio: "16 / 9",
      borderRadius: "6px",
      background: "#f2f4f3",
    },

    image: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: isVisible
        ? "scale(1)"
        : "scale(1.05)",
      transition:
        "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${index * 140 + 150}ms`,
    },

    category: {
      margin: "20px 0 0",
      color: "#e68a20",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },

    description: {
      margin: "10px 0 0",
      color: "#555555",
      fontSize: "15px",
      lineHeight: 1.7,
    },

    details: {
      margin: "12px 0 0",
      color: "#777777",
      fontSize: "14px",
      lineHeight: 1.7,
    },

    highlights: {
      display: "flex",
      flexDirection: "column",
      gap: "9px",
      margin: "20px 0 0",
      padding: 0,
      listStyle: "none",
    },

    highlightItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      color: "#555555",
      fontSize: "14px",
      lineHeight: 1.5,
    },

    highlightDot: {
      flex: "0 0 auto",
      width: "6px",
      height: "6px",
      marginTop: "7px",
      borderRadius: "50%",
      background: "#e68a20",
    },

    discount: {
      display: "flex",
      flexDirection: "column",
      marginTop: "25px",
      paddingTop: "20px",
      borderTop: "1px solid rgba(23, 92, 90, 0.1)",
    },

    discountValue: {
      color: "#e68a20",
      fontSize: "38px",
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },

    discountText: {
      marginTop: "7px",
      color: "#777777",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },

    serviceLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "22px",
      color: "#e68a20",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 700,
      transition: "gap 0.25s ease",
    },

    serviceArrow: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "17px",
      lineHeight: 1,
    },

    buttons: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginTop: "25px",
    },

    callButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      minHeight: "48px",
      padding: "10px 14px",
      boxSizing: "border-box",
      border: "1px solid #e68a20",
      borderRadius: "5px",
      background: "#e68a20",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      transition:
        "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
    },

    whatsappButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      minHeight: "48px",
      padding: "10px 14px",
      boxSizing: "border-box",
      border: "1px solid #249b68",
      borderRadius: "5px",
      background: "#249b68",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      transition:
        "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
    },

    buttonIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
    },

    buttonSvg: {
      width: "18px",
      height: "18px",
      display: "block",
    },
  };

  return (
    <>
      {/* =================================================
          ANIMATION
      ================================================= */}

      <style jsx>{`
        @keyframes offerJello {
          0% {
            transform: scale3d(1, 1, 1);
          }

          30% {
            transform: scale3d(1.25, 0.75, 1);
          }

          40% {
            transform: scale3d(0.75, 1.25, 1);
          }

          50% {
            transform: scale3d(1.15, 0.85, 1);
          }

          65% {
            transform: scale3d(0.95, 1.05, 1);
          }

          75% {
            transform: scale3d(1.05, 0.95, 1);
          }

          100% {
            transform: scale3d(1, 1, 1);
          }
        }

        @media (max-width: 640px) {
          .offer-card-responsive {
            padding: 22px !important;
          }

          .offer-title-responsive {
            font-size: 25px !important;
          }

          .offer-discount-value-responsive {
            font-size: 34px !important;
          }

          .offer-buttons-responsive {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .offer-card-responsive,
          .offer-image-responsive,
          .offer-label-responsive,
          .offer-service-link-responsive,
          .offer-call-button-responsive,
          .offer-whatsapp-button-responsive {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <article
        ref={cardRef}
        className="offer-card-responsive"
        style={styles.card}
      >
        <div style={styles.content}>

          {/* =================================================
              TOP
          ================================================= */}

          <div style={styles.top}>

            <div style={styles.number}>
              {offer.number}
            </div>

            <div style={styles.badges}>

              {offer.label && (
                <span
                  className="offer-label-responsive"
                  style={styles.label}
                >
                  {offer.label}
                </span>
              )}

              {offer.badge && (
                <span style={styles.badge}>
                  {offer.badge}
                </span>
              )}

            </div>

          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <h2
            className="offer-title-responsive"
            style={styles.title}
          >
            {offer.title}
          </h2>


          {/* =================================================
              IMAGE
          ================================================= */}

          {offer.image && (
            <div style={styles.imageWrapper}>
              <img
                src={offer.image}
                alt={
                  offer.imageAlt ||
                  `${offer.title} special offer at Ovia Wellness in Thrissur`
                }
                width="1200"
                height="750"
                loading={index === 0 ? "eager" : "lazy"}
                style={{
                  ...styles.image,
                  objectPosition: "top",
                }}
              />
            </div>
          )}


          {/* =================================================
              CATEGORY
          ================================================= */}

          {offer.category && (
            <p style={styles.category}>
              {offer.category}
            </p>
          )}




          {/* =================================================
              DETAILS
          ================================================= */}

          {offer.details && (
            <p style={styles.details}>
              {offer.details}
            </p>
          )}



          {/* =================================================
              DISCOUNT
          ================================================= */}

          {offer.discount && (
            <div style={styles.discount}>

              <span
                className="offer-discount-value-responsive"
                style={styles.discountValue}
              >
                {offer.discount}
              </span>

              <span style={styles.discountText}>
                Limited Special Offer
              </span>

            </div>
          )}


          {/* =================================================
              SERVICE LINK
          ================================================= */}

          {offer.href && (
            <Link
              href={offer.href}
              className="offer-service-link-responsive"
              style={styles.serviceLink}
              aria-label={`View ${offer.title} service`}
            >
              <span>
                View Service
              </span>

              <span
                style={styles.serviceArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          )}


          {/* =================================================
              CONTACT BUTTONS
          ================================================= */}

          {(phoneNumber || whatsappNumber) && (
            <div
              className="offer-buttons-responsive"
              style={styles.buttons}
            >

              {/* =================================================
                  CALL
              ================================================= */}

              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="offer-call-button-responsive"
                  style={styles.callButton}
                  aria-label={`Call now for ${offer.title}`}
                >
                  <span
                    style={styles.buttonIcon}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={styles.buttonSvg}
                    >
                      <path
                        d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18.81 19.5 19.5 0 0 1 5.19 12.81 19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>
                    Call Now
                  </span>
                </a>
              )}


              {/* =================================================
                  WHATSAPP
              ================================================= */}

              {whatsappNumber && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-whatsapp-button-responsive"
                  style={styles.whatsappButton}
                  aria-label={`WhatsApp about ${offer.title}`}
                >
                  <span
                    style={styles.buttonIcon}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={styles.buttonSvg}
                    >
                      <path
                        fill="currentColor"
                        d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.33-1.66a11.87 11.87 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.42ZM12.09 21.79h-.01a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.27C2.19 6.44 6.62 2 12.08 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.43 9.89-9.88 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z"
                      />
                    </svg>
                  </span>

                  <span>
                    WhatsApp
                  </span>
                </a>
              )}

            </div>
          )}

        </div>
      </article>
    </>
  );
}