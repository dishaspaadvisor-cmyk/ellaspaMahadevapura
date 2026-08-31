"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { footerData } from "@/Data/footerData";
import { siteData } from "@/Data/siteData";


export default function Footer({
  footer = footerData,
}) {

  const footerRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);


  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  useEffect(() => {

    const element =
      footerRef.current;

    if (!element) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

          } else {

            setIsVisible(false);

          }

        },
        {
          threshold: 0.12,

          rootMargin:
            "0px 0px -50px 0px",
        }
      );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, []);


  /* =====================================================
     SOCIAL ICONS
  ===================================================== */

  const socialIcons = {

    Instagram:
      <FaInstagram />,

    Facebook:
      <FaFacebookF />,

    Pinterest:
      <FaPinterestP />,

    YouTube:
      <FaYoutube />,

  };


  /* =====================================================
     CONTACT DATA
  ===================================================== */

  const contact =
    siteData.contact;


  /* =====================================================
     PHONE URL FALLBACK
  ===================================================== */

  const phoneUrl =
    contact.phoneUrl ||
    `tel:${contact.phone.replace(
      /[^0-9+]/g,
      ""
    )}`;


  /* =====================================================
     WHATSAPP URL
  ===================================================== */

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know more about your spa services and today's availability.";


  const whatsappBaseUrl =
    footer.contact?.whatsappUrl ||
    contact.whatsappUrl ||
    `https://wa.me/${String(
      contact.whatsapp || ""
    ).replace(/\D/g, "")}`;


  const whatsappUrl =
    `${whatsappBaseUrl}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  /* =====================================================
     RENDER
  ===================================================== */

  return (

    <footer
      ref={footerRef}
      className={`
        site-footer
        ${isVisible ? "footer-visible" : ""}
      `}
    >

      <div className="footer-container">


        {/* =================================================
            TOP FOOTER
        ================================================= */}

        <div className="footer-top">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">


            {/* LOGO */}

            <Link
              href="/"
              className="footer-logo"
            >

              <img
                src={siteData.brand.logo}
                alt={
                  siteData.brand.logoAlt ||
                  `${siteData.brand.name} ${
                    siteData.brand.suffix || ""
                  }`.trim()
                }
                className="footer-logo-image"
              />

            </Link>


            {/* DESCRIPTION */}

            <p className="footer-description">

              {footer.description}

            </p>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="footer-socials">

              {footer.socials?.map(
                (social) => (

                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    aria-label={social.label}
                  >

                    {socialIcons[social.icon]}

                  </a>

                )
              )}

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <span className="footer-column-eyebrow">
              Explore
            </span>

            <h3>
              Quick Links
            </h3>


            <ul className="footer-links">

              {footer.quickLinks?.map(
                (link) => (

                  <li
                    key={link.label}
                  >

                    <Link
                      href={link.href}
                    >

                      <ArrowRight
                        size={14}
                      />

                      <span>
                        {link.label}
                      </span>

                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            className="
              footer-column
              footer-services-column
            "
          >

            <span className="footer-column-eyebrow">
              Our Services
            </span>

            <h3>
              Spa & Massage
            </h3>


            <ul
              className="
                footer-links
                footer-service-links
              "
            >

              {footer.services?.map(
                (service) => (

                  <li
                    key={service.label}
                  >

                    <Link
                      href={service.href}
                    >

                      <ArrowRight
                        size={14}
                      />

                      <span>
                        {service.label}
                      </span>

                    </Link>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div
            className="
              footer-column
              footer-contact-column
            "
          >

            <span className="footer-column-eyebrow">
              Get In Touch
            </span>

            <h3>
              Contact Us
            </h3>


            {/* =================================================
                PHONE
            ================================================= */}

            <a
              href={phoneUrl}
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">

                <Phone
                  size={17}
                />

              </span>

              <span>
                {contact.phone}
              </span>

            </a>


            {/* =================================================
                WHATSAPP
            ================================================= */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">

                <FaWhatsapp
                  size={17}
                />

              </span>

              <span>
                WhatsApp
              </span>

            </a>


            {/* =================================================
                EMAIL
            ================================================= */}

            {footer.contact?.email && (

              <a
                href={`mailto:${footer.contact.email}`}
                className="footer-contact-item"
              >

                <span className="footer-contact-icon">

                  <Mail
                    size={17}
                  />

                </span>

                <span>
                  {footer.contact.email}
                </span>

              </a>

            )}


            {/* =================================================
                ADDRESS
            ================================================= */}

            {footer.contact?.address && (

              <div
                className="
                  footer-contact-item
                "
              >

                <span
                  className="
                    footer-contact-icon
                  "
                >

                  <MapPin
                    size={17}
                  />

                </span>

                <span>
                  {footer.contact.address}
                </span>

              </div>

            )}

          </div>

        </div>


        {/* =================================================
            FOOTER CTA
        ================================================= */}

        <div className="footer-cta">


          <div>

            <span
              className="
                footer-cta-eyebrow
              "
            >
              / YOUR WELLNESS TIME
            </span>


            <h2>

              Make time for

              <br />

              <em>
                yourself.
              </em>

            </h2>

          </div>


          <Link
            href="/contact"
            className="footer-cta-button"
          >

            <span>
              Book Your Experience
            </span>

            <span>
              ↗
            </span>

          </Link>

        </div>


        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">


          {/* COPYRIGHT */}

          <p>

            © {new Date().getFullYear()}{" "}

            {siteData.brand.name}{" "}

            {siteData.brand.suffix}.

            {" "}All rights reserved.

          </p>


          {/* LEGAL LINKS */}

          <div
            className="
              footer-bottom-links
            "
          >

            <Link
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
            >
              Terms & Conditions
            </Link>

          </div>


          {/* CREDIT */}

          <p className="footer-credit">
            Designed for wellness.
          </p>

        </div>

      </div>

    </footer>

  );

}