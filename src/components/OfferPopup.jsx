"use client";

import { useEffect, useState } from "react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaTimes,
} from "react-icons/fa";

import { siteData } from "@/Data/siteData";


export default function OfferPopup() {

  /* =====================================================
     SETTINGS
  ===================================================== */

  const SHOW_AFTER = 35; // seconds

  const OFFER_DURATION = 180; // 3 minutes


  /* =====================================================
     STATE
  ===================================================== */

  const [isOpen, setIsOpen] = useState(false);

  const [timeLeft, setTimeLeft] =
    useState(OFFER_DURATION);


  /* =====================================================
     OPEN AFTER 35 SECONDS
  ===================================================== */

  useEffect(() => {

    console.log(
      `Offer popup will open in ${SHOW_AFTER} seconds`
    );


    const timer = setTimeout(() => {

      console.log("Opening offer popup");

      setTimeLeft(OFFER_DURATION);

      setIsOpen(true);

    }, SHOW_AFTER * 1000);


    return () => {
      clearTimeout(timer);
    };

  }, []);


  /* =====================================================
     COUNTDOWN
  ===================================================== */

  useEffect(() => {

    if (!isOpen) {
      return;
    }


    const timer = setInterval(() => {

      setTimeLeft((previous) => {

        if (previous <= 1) {

          clearInterval(timer);

          setIsOpen(false);

          return 0;
        }

        return previous - 1;

      });

    }, 1000);


    return () => {
      clearInterval(timer);
    };

  }, [isOpen]);


  /* =====================================================
     ESC KEY
  ===================================================== */

  useEffect(() => {

    if (!isOpen) {
      return;
    }


    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setIsOpen(false);
      }

    };


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [isOpen]);


  /* =====================================================
     CONTACT
  ===================================================== */

  const contact = siteData.contact;


  const phoneNumber =
    String(contact.phone || "")
      .replace(/[^0-9+]/g, "");


  const phoneUrl =
    contact.phoneUrl ||
    `tel:${phoneNumber}`;


  const whatsappNumber =
    String(contact.whatsapp || "")
      .replace(/\D/g, "");


  const whatsappMessage =
    "Hi, I saw the ₹1,999 special offer on the ELLA SPA website. I would like to know more about the offer and today's availability.";


  const whatsappUrl =
    contact.whatsappUrl
      ? `${contact.whatsappUrl}?text=${encodeURIComponent(
          whatsappMessage
        )}`
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;


  /* =====================================================
     TIME
  ===================================================== */

  const minutes =
    Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");


  const seconds =
    (timeLeft % 60)
      .toString()
      .padStart(2, "0");


  /* =====================================================
     CLOSE
  ===================================================== */

  const closePopup = () => {
    setIsOpen(false);
  };


  /* =====================================================
     DON'T RENDER
  ===================================================== */

  if (!isOpen) {
    return null;
  }


  /* =====================================================
     POPUP
  ===================================================== */

  return (
    <>
      <div
        className="offer-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
      >

        {/* BACKDROP */}

        <button
          type="button"
          className="offer-backdrop"
          onClick={closePopup}
          aria-label="Close popup"
        />


        {/* POPUP */}

        <div className="offer-popup">


          {/* CLOSE */}

          <button
            type="button"
            className="offer-close"
            onClick={closePopup}
            aria-label="Close offer"
          >
            <FaTimes />
          </button>


          {/* IMAGE */}

          <div className="offer-image ">

            <img
              src="/service/14.png"
              alt="ELLA SPA ₹1,999 special offer"
            />

            <div className="offer-image-overlay" />

            <div className="offer-badge">

              <span />

              LIMITED TIME OFFER

            </div>

          </div>


          {/* CONTENT */}

          <div className="offer-content">

            <span className="offer-eyebrow">
              ELLA SPA
            </span>


            <h2 id="offer-title">
              Best Offer Available Now
            </h2>


            <p>
              Enjoy a premium wellness experience
              designed to help you relax, refresh
              and feel renewed.
            </p>


            {/* PRICE */}

            <div className="offer-price">

              <span>₹</span>

              <strong>1,999</strong>

            </div>


            <div className="offer-price-label">
              SPECIAL SPA EXPERIENCE
            </div>


            {/* TIMER */}

            <div className="offer-countdown">

              <div className="offer-countdown-top">

                <span>
                  <FaClock />
                  OFFER ENDS IN
                </span>

                <b>
                  BOOK NOW
                </b>

              </div>


              <div className="offer-time">

                <strong>
                  {minutes}
                </strong>

                <span>:</span>

                <strong>
                  {seconds}
                </strong>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="offer-buttons">

              <a
                href={phoneUrl}
                className="offer-call"
              >

                <FaPhoneAlt />

                <span>
                  Call Now
                </span>

              </a>


              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="offer-whatsapp"
              >

                <FaWhatsapp />

                <span>
                  WhatsApp
                </span>

              </a>

            </div>


            <div className="offer-note">

              <span />

              Check today's availability

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          CSS
      ================================================= */}

      <style jsx>{`

        .offer-overlay {
          position: fixed;
          inset: 0;
          z-index: 999999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 15px;

          background: rgba(0,0,0,0.65);

          backdrop-filter: blur(5px);

          animation: fadeIn 0.3s ease;
        }


        .offer-backdrop {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          border: 0;

          background: transparent;

          cursor: pointer;
        }


        .offer-popup {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 390px;

          overflow: hidden;

          border-radius: 20px;

          background: #fff;

          box-shadow:
            0 25px 80px
            rgba(0,0,0,0.4);

          animation:
            popupIn 0.45s
            cubic-bezier(.16,1,.3,1);
        }


        /* CLOSE */

        .offer-close {
          position: absolute;

          top: 10px;
          right: 10px;

          z-index: 5;

          width: 34px;
          height: 34px;

          border: 0;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.95);

          color: #333;

          cursor: pointer;

          box-shadow:
            0 3px 15px
            rgba(0,0,0,0.2);

          transition: .25s;
        }


        .offer-close:hover {
          transform: rotate(90deg);
        }


        /* IMAGE */

        .offer-image {
          position: relative;

          width: 100%;
          height: 200px;

          overflow: hidden;
        }


        .offer-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position:top;

          animation:
            imageZoom 8s
            ease-in-out
            infinite alternate;
        }


        .offer-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to bottom,
              transparent 30%,
              rgba(0,0,0,.7)
            );
        }


        /* BADGE */

        .offer-badge {
          position: absolute;

          left: 15px;
          bottom: 14px;

          display: flex;
          align-items: center;

          gap: 7px;

          padding: 7px 11px;

          border-radius: 20px;

          background:
            rgba(0,0,0,.65);

          color: #fff;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: .12em;
        }


        .offer-badge span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #fff;

          box-shadow:
            0 0 10px #fff;

          animation:
            blink 1s infinite;
        }


        /* CONTENT */

        .offer-content {
          padding:
            20px 22px 18px;

          text-align: center;
        }


        .offer-eyebrow {
          color: #a17a3d;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: .2em;
        }


        .offer-content h2 {
          margin:
            6px 0 6px;

          color: #28231e;

          font-size: 27px;

          line-height: 1.15;

          font-weight: 600;
        }


        .offer-content p {
          margin:
            0 auto;

          max-width: 300px;

          color: #777;

          font-size: 12px;

          line-height: 1.55;
        }


        /* PRICE */

        .offer-price {
          display: flex;

          align-items: center;
          justify-content: center;

          margin-top: 12px;

          color: #a17a3d;

          animation:
            pricePulse 1.8s
            infinite;
        }


        .offer-price span {
          font-size: 20px;
        }


        .offer-price strong {
          font-size: 42px;

          line-height: 1;

          font-weight: 700;
        }


        .offer-price-label {
          margin-top: 3px;

          color: #888;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: .15em;
        }


        /* COUNTDOWN */

        .offer-countdown {
          margin-top: 14px;

          padding: 10px 13px;

          border-radius: 12px;

          background: #29241e;
        }


        .offer-countdown-top {
          display: flex;

          align-items: center;
          justify-content: space-between;

          color:
            rgba(255,255,255,.7);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: .1em;
        }


        .offer-countdown-top span {
          display: flex;

          align-items: center;

          gap: 5px;
        }


        .offer-countdown-top svg {
          color: #d0a45e;
        }


        .offer-countdown-top b {
          color: #d0a45e;

          animation:
            blink 1s infinite;
        }


        .offer-time {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          margin-top: 3px;
        }


        .offer-time strong {
          color: #fff;

          font-size: 27px;

          font-variant-numeric:
            tabular-nums;
        }


        .offer-time span {
          color: #d0a45e;

          font-size: 22px;

          animation:
            blink 1s infinite;
        }


        /* BUTTONS */

        .offer-buttons {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 9px;

          margin-top: 13px;
        }


        .offer-buttons a {
          min-height: 47px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          border-radius: 11px;

          color: #fff;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;

          animation:
            shakeButton 3s
            ease-in-out
            infinite;

          transition: .25s;
        }


        .offer-call {
          background:
            linear-gradient(
              135deg,
              #c8a35f,
              #987039
            );

          box-shadow:
            0 6px 18px
            rgba(152,112,57,.25);
        }


        .offer-whatsapp {
          background:
            linear-gradient(
              135deg,
              #35dc78,
              #159b4c
            );

          box-shadow:
            0 6px 18px
            rgba(21,155,76,.25);
        }


        .offer-buttons a:hover {
          transform:
            translateY(-3px)
            scale(1.02);
        }


        /* NOTE */

        .offer-note {
          margin-top: 9px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 6px;

          color: #888;

          font-size: 8px;
        }


        .offer-note span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #32b968;

          box-shadow:
            0 0 8px
            rgba(50,185,104,.7);

          animation:
            blink 1.2s infinite;
        }


        /* ANIMATIONS */

        @keyframes fadeIn {

          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }

        }


        @keyframes popupIn {

          from {
            opacity: 0;

            transform:
              translateY(25px)
              scale(.94);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }


        @keyframes imageZoom {

          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.06);
          }

        }


        @keyframes blink {

          0%,
          100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }

        }


        @keyframes pricePulse {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.04);
          }

        }


        @keyframes shakeButton {

          0%,
          80%,
          100% {
            transform: translateX(0);
          }

          83% {
            transform: translateX(-2px);
          }

          86% {
            transform: translateX(2px);
          }

          89% {
            transform: translateX(-2px);
          }

          92% {
            transform: translateX(2px);
          }

          95% {
            transform: translateX(0);
          }

        }


        /* MOBILE */

        @media (max-width: 480px) {

          .offer-popup {
            max-width: 350px;
          }


          .offer-image {
            height: 175px;
          }


          .offer-content {
            padding:
              18px 17px 15px;
          }


          .offer-content h2 {
            font-size: 24px;
          }


          .offer-price strong {
            font-size: 38px;
          }

        }

      `}</style>
    </>
  );
}