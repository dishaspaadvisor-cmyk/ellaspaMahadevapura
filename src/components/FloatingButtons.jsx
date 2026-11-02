"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { siteData } from "@/Data/siteData";


export default function FloatingButtons() {

  const contact = siteData.contact;


  /* =====================================================
     PHONE
  ===================================================== */

  const phoneNumber =
    String(contact.phone || "")
      .replace(/[^0-9+]/g, "");


  const phoneUrl =
    contact.phoneUrl ||
    `tel:${phoneNumber}`;


  /* =====================================================
     WHATSAPP
  ===================================================== */

  const whatsappNumber =
    String(contact.whatsapp || "")
      .replace(/\D/g, "");


  const whatsappMessage =
    "Hi, I am visiting the ELLA SPA website. I would like to know more about your spa services and today's availability.";


  const whatsappUrl =
    contact.whatsappUrl
      ? `${contact.whatsappUrl}?text=${encodeURIComponent(
          whatsappMessage
        )}`
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;


  return (
    <>
      <div className="floating-buttons">


        {/* =================================================
            CALL
        ================================================= */}

        <a
          href={phoneUrl}
          className="floating-button floating-call"
          aria-label="Call ELLA SPA"
        >

          <span className="floating-icon">
            <FaPhoneAlt />
          </span>

          <span className="floating-label">
            Call
          </span>

          <span className="floating-light" />

        </a>


        {/* =================================================
            WHATSAPP
        ================================================= */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-button floating-whatsapp"
          aria-label="WhatsApp ELLA SPA"
        >

          <span className="floating-icon">
            <FaWhatsapp />
          </span>

          <span className="floating-label">
            WhatsApp
          </span>

          <span className="floating-light" />

        </a>


      </div>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style jsx>{`

        /* ================================================
           CONTAINER
        ================================================= */

        .floating-buttons {
          position: fixed;

          right: 18px;
          bottom: 20px;

          z-index: 99990;

          display: flex;

          flex-direction: column;

          gap: 11px;

          pointer-events: none;
        }


        /* ================================================
           BUTTON
        ================================================= */

        .floating-button {
          position: relative;

          width: 56px;
          height: 56px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #ffffff;

          text-decoration: none;

          pointer-events: auto;

          box-shadow:
            0 8px 25px
            rgba(0, 0, 0, 0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

          animation:
            floatingShake 3s
            ease-in-out
            infinite;
        }


        /* ================================================
           CALL
        ================================================= */

        .floating-call {

          background:
            linear-gradient(
              135deg,
              #3b0e0e,
              #360c0c
            );

          animation:
            floatingShake 3s
            ease-in-out
            infinite,
            callGlow 2s
            ease-in-out
            infinite;
        }


        /* ================================================
           WHATSAPP
        ================================================= */

        .floating-whatsapp {

          background:
            linear-gradient(
              135deg,
              #35dc78,
              #159d4d
            );

          animation:
            floatingShake 3s
            ease-in-out
            infinite 0.4s,
            whatsappGlow 2s
            ease-in-out
            infinite;
        }


        /* ================================================
           ICON
        ================================================= */

        .floating-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 22px;

          z-index: 2;

          animation:
            iconPulse 1.8s
            ease-in-out
            infinite;
        }


        /* ================================================
           LABEL
        ================================================= */

        .floating-label {
          position: absolute;

          right: 68px;

          top: 50%;

          transform:
            translateY(-50%)
            translateX(8px);

          padding:
            7px 11px;

          border-radius: 7px;

          background:
            #29241e;

          color:
            #ffffff;

          font-size: 10px;

          font-weight: 700;

          white-space: nowrap;

          opacity: 0;

          pointer-events: none;

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.2);
        }


        .floating-button:hover
        .floating-label {

          opacity: 1;

          transform:
            translateY(-50%)
            translateX(0);

        }


        /* ================================================
           LIGHT
        ================================================= */

        .floating-light {

          position: absolute;

          top: 5px;
          right: 5px;

          width: 9px;
          height: 9px;

          border-radius: 50%;

          background:
            #ffffff;

          box-shadow:
            0 0 7px #ffffff,
            0 0 15px #ffffff;

          animation:
            lightBlink 1s
            ease-in-out
            infinite;
        }


        /* ================================================
           HOVER
        ================================================= */

        .floating-button:hover {

          transform:
            scale(1.1);

          box-shadow:
            0 12px 35px
            rgba(0,0,0,0.3);

        }


        /* ================================================
           SHAKE
        ================================================= */

        @keyframes floatingShake {

          0%,
          80%,
          100% {
            transform:
              translateX(0);
          }

          83% {
            transform:
              translateX(-3px);
          }

          86% {
            transform:
              translateX(3px);
          }

          89% {
            transform:
              translateX(-3px);
          }

          92% {
            transform:
              translateX(3px);
          }

          95% {
            transform:
              translateX(0);
          }

        }


        /* ================================================
           CALL GLOW
        ================================================= */

        @keyframes callGlow {

          0%,
          100% {
            box-shadow:
              0 8px 25px
              rgba(0,0,0,0.22);
          }

          50% {
            box-shadow:
              0 8px 30px
              rgba(201,163,95,0.7),
              0 0 0 7px
              rgba(201,163,95,0.1);
          }

        }


        /* ================================================
           WHATSAPP GLOW
        ================================================= */

        @keyframes whatsappGlow {

          0%,
          100% {
            box-shadow:
              0 8px 25px
              rgba(0,0,0,0.22);
          }

          50% {
            box-shadow:
              0 8px 30px
              rgba(53,220,120,0.7),
              0 0 0 7px
              rgba(53,220,120,0.1);
          }

        }


        /* ================================================
           ICON PULSE
        ================================================= */

        @keyframes iconPulse {

          0%,
          100% {
            transform:
              scale(1);
          }

          50% {
            transform:
              scale(1.12);
          }

        }


        /* ================================================
           LIGHT BLINK
        ================================================= */

        @keyframes lightBlink {

          0%,
          100% {
            opacity: 0.25;

            transform:
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              scale(1.2);
          }

        }


        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {

          .floating-buttons {

            right: 12px;
            bottom: 15px;

            gap: 9px;

          }


          .floating-button {

            width: 52px;
            height: 52px;

          }


          .floating-icon {

            font-size: 20px;

          }


          .floating-label {

            display: none;

          }

        }


        /* ================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 360px) {

          .floating-buttons {

            right: 10px;
            bottom: 12px;

          }


          .floating-button {

            width: 48px;
            height: 48px;

          }


          .floating-icon {

            font-size: 18px;

          }

        }

      `}</style>
    </>
  );
}