"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { aboutData } from "@/Data/aboutData";

import { siteData } from "@/Data/siteData";

/* =========================================================
   PREMIUM SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -80px 0px",
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        aura-reveal
        aura-reveal-${direction}
        ${
          visible
            ? "aura-reveal-visible"
            : ""
        }
        ${className}
      `}
      style={{
        "--aura-delay":
          `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


/* =========================================================
   IMAGE REVEAL
========================================================= */

function RevealImage({
  src,
  alt,
  className = "",
  direction = "right",
  delay = 0,
}) {
  const ref = useRef(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -70px 0px",
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        aura-image-reveal
        aura-image-${direction}
        ${
          visible
            ? "aura-image-visible"
            : ""
        }
        ${className}
      `}
      style={{
        "--aura-delay":
          `${delay}ms`,
      }}
    >
      <div className="aura-image-clip">
        <img
          src={src}
          alt={alt}
        />
      </div>

      <div className="aura-image-border" />
    </div>
  );
}


/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  children,
}) {
  return (
    <div className="aura-section-label">

      <span className="aura-section-number">
        {number}
      </span>

      <span className="aura-label-line" />

      <span>
        {children}
      </span>

    </div>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {

  const {
    hero,
    story,
    philosophy,
    stats,
    cta,
  } = aboutData ;


  return (
    <main className="aura-about">

      {/* =====================================================
          INLINE CSS
      ===================================================== */}

      <style jsx global>{`

        /* ===================================================
           VARIABLES
        =================================================== */

        .aura-about {

          --cream:
            #f6f2ea;

          --cream-dark:
            #ebe5da;

          --white:
            #ffffff;

          --dark:
            #25231f;

          --text:
            #3e3b35;

          --muted:
            #817c73;

          --gold:
            #a27b4d;

          --gold-light:
            #c3a27d;

          --line:
            rgba(
              37,
              35,
              31,
              0.13
            );

          width:
            100%;

          min-height:
            100vh;

          overflow-x:
            hidden;

          background:
            var(--cream);

          color:
            var(--dark);
        }


        .aura-about *,
        .aura-about
        *::before,
        .aura-about
        *::after {
          box-sizing:
            border-box;
        }


        .aura-about img {
          max-width:
            100%;
        }


        .aura-about a {
          text-decoration:
            none;
        }


        /* ===================================================
           NEW REVEAL ANIMATION
           Direction + Blur + Scale
        =================================================== */

        .aura-reveal {

          opacity:
            0;

          filter:
            blur(10px);

          transform:
            translate3d(
              0,
              55px,
              0
            )
            scale(
              0.97
            );

          transition:
            opacity
            0.9s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            ),

            transform
            1s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            ),

            filter
            1s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            );

          transition-delay:
            var(
              --aura-delay,
              0ms
            );

          will-change:
            opacity,
            transform,
            filter;
        }


        .aura-reveal-left {

          transform:
            translate3d(
              -70px,
              0,
              0
            )
            scale(
              0.97
            );
        }


        .aura-reveal-right {

          transform:
            translate3d(
              70px,
              0,
              0
            )
            scale(
              0.97
            );
        }


        .aura-reveal-up {

          transform:
            translate3d(
              0,
              55px,
              0
            )
            scale(
              0.97
            );
        }


        .aura-reveal-visible {

          opacity:
            1;

          filter:
            blur(0);

          transform:
            translate3d(
              0,
              0,
              0
            )
            scale(1);
        }


        /* ===================================================
           IMAGE ANIMATION
        =================================================== */

        .aura-image-reveal {

          position:
            relative;

          opacity:
            0;

          overflow:
            visible;

          transition:
            opacity
            0.8s
            ease,

            transform
            1s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            );

          transition-delay:
            var(
              --aura-delay,
              0ms
            );
        }


        .aura-image-left {

          transform:
            translateX(
              -80px
            );
        }


        .aura-image-right {

          transform:
            translateX(
              80px
            );
        }


        .aura-image-visible {

          opacity:
            1;

          transform:
            translateX(0);
        }


        .aura-image-clip {

          position:
            relative;

          width:
            100%;

          height:
            100%;

          overflow:
            hidden;

          background:
            #ddd7cb;
        }


        .aura-image-clip::after {

          content:
            "";

          position:
            absolute;

          inset:
            0;

          z-index:
            2;

          background:
            linear-gradient(
              115deg,
              transparent 20%,
              rgba(
                255,
                255,
                255,
                0.22
              ) 48%,
              transparent 70%
            );

          transform:
            translateX(
              -130%
            );

          transition:
            transform
            1.3s
            ease;

          pointer-events:
            none;
        }


        .aura-image-visible
        .aura-image-clip::after {

          transform:
            translateX(
              130%
            );
        }


        .aura-image-clip img {

          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          transform:
            scale(
              1.10
            );

          transition:
            transform
            1.4s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            );
        }


        .aura-image-visible
        .aura-image-clip img {

          transform:
            scale(1);
        }


        .aura-image-reveal:hover
        .aura-image-clip img {

          transform:
            scale(
              1.045
            );
        }


        .aura-image-border {

          position:
            absolute;

          inset:
            18px
            -18px
            -18px
            18px;

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.42
            );

          pointer-events:
            none;
        }


        /* ===================================================
           SECTION LABEL
        =================================================== */

        .aura-section-label {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          color:
            var(--muted);

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            0.20em;

          text-transform:
            uppercase;
        }


        .aura-section-number {

          color:
            var(--gold);

          font-family:
            Georgia,
            serif;

          font-size:
            13px;

          letter-spacing:
            0.05em;
        }


        .aura-label-line {

          width:
            34px;

          height:
            1px;

          background:
            var(--gold);
        }


        /* ===================================================
           HERO
        =================================================== */

        .aura-hero {

          position:
            relative;

          min-height:
            100vh;

          padding:
            145px
            5vw
            80px;

          display:
            flex;

          align-items:
            center;

          background:
            var(--cream);

          overflow:
            hidden;
        }


        .aura-hero-container {

          position:
            relative;

          z-index:
            2;

          width:
            min(
              1400px,
              100%
            );

          margin:
            0 auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.80fr
            )
            minmax(
              0,
              1.20fr
            );

          gap:
            clamp(
              55px,
              8vw,
              120px
            );

          align-items:
            center;
        }


        /* ===================================================
           HERO CONTENT
        =================================================== */

        .aura-hero-content {

          max-width:
            620px;
        }


        .aura-hero-title {

          margin:
            28px
            0
            30px;

          color:
            var(--dark);

          font-size:
            clamp(
              58px,
              7vw,
              110px
            );

          line-height:
            0.86;

          font-weight:
            300;

          letter-spacing:
            -0.075em;
        }


        .aura-hero-title em {

          display:
            block;

          margin-left:
            8%;

          color:
            var(--gold);

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-style:
            italic;

          font-weight:
            300;
        }


        .aura-hero-description {

          max-width:
            510px;

          margin:
            0;

          color:
            var(--muted);

          font-size:
            14px;

          line-height:
            1.9;
        }


        .aura-hero-meta {

          display:
            flex;

          align-items:
            center;

          gap:
            18px;

          margin-top:
            45px;

          color:
            #918b82;

          font-size:
            8px;

          font-weight:
            700;

          letter-spacing:
            0.20em;

          text-transform:
            uppercase;
        }


        .aura-meta-dot {

          color:
            var(--gold);

          font-size:
            16px;
        }


        /* ===================================================
           HERO IMAGE
        =================================================== */

        .aura-hero-image {

          height:
            min(
              700px,
              72vh
            );

          min-height:
            520px;
        }


        /* ===================================================
           HERO DECOR
        =================================================== */

        .aura-hero-orbit {

          position:
            absolute;

          width:
            600px;

          height:
            600px;

          right:
            -300px;

          top:
            50%;

          transform:
            translateY(
              -50%
            );

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.12
            );

          border-radius:
            50%;

          pointer-events:
            none;
        }


        .aura-hero-orbit::before {

          content:
            "";

          position:
            absolute;

          inset:
            80px;

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.08
            );

          border-radius:
            50%;
        }


        /* ===================================================
           STORY
        =================================================== */

        .aura-story {

          padding:
            160px
            5vw;

          background:
            var(--white);
        }


        .aura-story-container {

          width:
            min(
              1240px,
              100%
            );

          margin:
            auto;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.92fr
            )
            minmax(
              0,
              1fr
            );

          gap:
            clamp(
              55px,
              9vw,
              120px
            );

          align-items:
            center;
        }


        .aura-story-image {

          height:
            650px;
        }


        .aura-story-content {

          max-width:
            620px;
        }


        .aura-story-title {

          margin:
            30px
            0
            38px;

          font-size:
            clamp(
              44px,
              5.2vw,
              74px
            );

          line-height:
            0.92;

          font-weight:
            300;

          letter-spacing:
            -0.065em;
        }


        .aura-story-text {

          display:
            flex;

          flex-direction:
            column;

          gap:
            20px;
        }


        .aura-story-text p {

          margin:
            0;

          color:
            var(--muted);

          font-size:
            14px;

          line-height:
            1.9;
        }


        /* ===================================================
           PHILOSOPHY
        =================================================== */

        .aura-philosophy {

          padding:
            155px
            5vw;

          background:
            var(--cream);
        }


        .aura-philosophy-container {

          width:
            min(
              1350px,
              100%
            );

          margin:
            auto;
        }


        .aura-philosophy-intro {

          display:
            grid;

          grid-template-columns:
            0.25fr
            1fr;

          gap:
            50px;

          margin-bottom:
            90px;
        }


        .aura-philosophy-title {

          max-width:
            850px;

          margin:
            28px
            0
            25px;

          font-size:
            clamp(
              55px,
              7vw,
              100px
            );

          line-height:
            0.84;

          font-weight:
            300;

          letter-spacing:
            -0.075em;
        }


        .aura-philosophy-title em {

          display:
            block;

          color:
            var(--gold);

          font-family:
            Georgia,
            serif;

          font-style:
            italic;
        }


        .aura-philosophy-description {

          max-width:
            580px;

          margin:
            0;

          color:
            var(--muted);

          font-size:
            14px;

          line-height:
            1.9;
        }


        /* ===================================================
           PHILOSOPHY ITEMS
        =================================================== */

        .aura-philosophy-list {

          border-top:
            1px solid
            var(--line);
        }


        .aura-philosophy-item {

          display:
            grid;

          grid-template-columns:
            100px
            1fr
            1fr
            60px;

          gap:
            30px;

          align-items:
            center;

          min-height:
            170px;

          border-bottom:
            1px solid
            var(--line);

          transition:
            padding
            0.45s
            ease,

            background
            0.45s
            ease;
        }


        .aura-philosophy-item:hover {

          padding:
            0
            25px;

          background:
            rgba(
              255,
              255,
              255,
              0.42
            );
        }


        .aura-point-number {

          color:
            var(--gold);

          font-family:
            Georgia,
            serif;

          font-size:
            14px;
        }


        .aura-point-title h3 {

          margin:
            0;

          font-size:
            27px;

          line-height:
            1.1;

          font-weight:
            400;

          letter-spacing:
            -0.03em;
        }


        .aura-point-description p {

          max-width:
            460px;

          margin:
            0;

          color:
            var(--muted);

          font-size:
            13px;

          line-height:
            1.8;
        }


        .aura-point-arrow {

          width:
            44px;

          height:
            44px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.38
            );

          border-radius:
            50%;

          color:
            var(--gold);

          transition:
            transform
            0.4s
            ease,

            background
            0.35s
            ease,

            color
            0.35s
            ease;
        }


        .aura-philosophy-item:hover
        .aura-point-arrow {

          transform:
            rotate(
              45deg
            );

          background:
            var(--gold);

          color:
            #ffffff;
        }


        /* ===================================================
           STATS
        =================================================== */

        .aura-stats {

          padding:
            95px
            5vw;

          background:
            var(--dark);

          color:
            #ffffff;
        }


        .aura-stats-container {

          width:
            min(
              1300px,
              100%
            );

          margin:
            auto;
        }


        .aura-stats-header {

          display:
            flex;

          align-items:
            flex-end;

          justify-content:
            space-between;

          margin-bottom:
            65px;
        }


        .aura-stats-title {

          margin:
            25px
            0
            0;

          font-size:
            clamp(
              48px,
              6vw,
              78px
            );

          line-height:
            0.88;

          font-weight:
            300;

          letter-spacing:
            -0.065em;
        }


        .aura-stats-title em {

          color:
            var(--gold-light);

          font-family:
            Georgia,
            serif;

          font-style:
            italic;
        }


        .aura-stats-grid {

          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              1fr
            );

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.16
            );

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.16
            );
        }


        .aura-stat {

          min-height:
            170px;

          padding:
            35px;

          display:
            flex;

          flex-direction:
            column;

          justify-content:
            center;

          border-left:
            1px solid
            rgba(
              255,
              255,
              255,
              0.16
            );
        }


        .aura-stat:first-child {

          border-left:
            0;
        }


        .aura-stat-number {

          color:
            #ffffff;

          font-family:
            Georgia,
            serif;

          font-size:
            clamp(
              38px,
              4vw,
              62px
            );

          line-height:
            1;

          font-weight:
            400;

          letter-spacing:
            -0.04em;
        }


        .aura-stat-label {

          margin-top:
            15px;

          color:
            rgba(
              255,
              255,
              255,
              0.53
            );

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            0.17em;

          text-transform:
            uppercase;
        }


        /* ===================================================
           CTA
        =================================================== */

        .aura-cta {

          position:
            relative;

          overflow:
            hidden;

          padding:
            165px
            5vw;

          text-align:
            center;

          background:
            var(--cream-dark);
        }


        .aura-cta-container {

          position:
            relative;

          z-index:
            2;

          width:
            min(
              900px,
              100%
            );

          margin:
            auto;
        }


        .aura-cta-title {

          margin:
            30px
            0;

          font-size:
            clamp(
              58px,
              8vw,
              110px
            );

          line-height:
            0.84;

          font-weight:
            300;

          letter-spacing:
            -0.08em;
        }


        .aura-cta-title em {

          display:
            block;

          color:
            var(--gold);

          font-family:
            Georgia,
            serif;

          font-style:
            italic;
        }


        .aura-cta-description {

          max-width:
            570px;

          margin:
            0
            auto
            40px;

          color:
            var(--muted);

          font-size:
            14px;

          line-height:
            1.9;
        }


        /* ===================================================
           CTA BUTTON
        =================================================== */

        .aura-cta-button {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            16px;

          padding:
            7px
            7px
            7px
            25px;

          border:
            1px solid
            var(--dark);

          border-radius:
            999px;

          background:
            var(--dark);

          color:
            #ffffff;

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            0.15em;

          text-transform:
            uppercase;

          transition:
            transform
            0.4s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            ),

            box-shadow
            0.4s
            ease;
        }


        .aura-cta-button:hover {

          transform:
            translateY(
              -5px
            );

          box-shadow:
            0
            18px
            40px
            rgba(
              0,
              0,
              0,
              0.16
            );
        }


        .aura-cta-arrow {

          width:
            40px;

          height:
            40px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            50%;

          background:
            #ffffff;

          color:
            var(--dark);

          font-size:
            17px;

          transition:
            transform
            0.4s
            ease;
        }


        .aura-cta-button:hover
        .aura-cta-arrow {

          transform:
            rotate(
              45deg
            );
        }


        /* ===================================================
           CTA ORBIT
        =================================================== */

        .aura-cta-orbit {

          position:
            absolute;

          width:
            650px;

          height:
            650px;

          right:
            -330px;

          top:
            50%;

          transform:
            translateY(
              -50%
            );

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.16
            );

          border-radius:
            50%;
        }


        .aura-cta-orbit::before {

          content:
            "";

          position:
            absolute;

          inset:
            90px;

          border:
            1px solid
            rgba(
              162,
              123,
              77,
              0.10
            );

          border-radius:
            50%;
        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (
          max-width: 1050px
        ) {

          .aura-hero {

            min-height:
              auto;

            padding:
              130px
              6vw
              80px;
          }


          .aura-hero-container {

            grid-template-columns:
              1fr
              1fr;

            gap:
              55px;
          }


          .aura-hero-image {

            min-height:
              500px;

            height:
              600px;
          }


          .aura-story {

            padding:
              120px
              6vw;
          }


          .aura-story-container {

            gap:
              60px;
          }


          .aura-story-image {

            height:
              540px;
          }


          .aura-philosophy {

            padding:
              120px
              6vw;
          }


          .aura-stats {

            padding:
              75px
              6vw;
          }


          .aura-stat {

            padding:
              25px;
          }


          .aura-cta {

            padding:
              125px
              6vw;
          }

        }


        /* ===================================================
           TABLET PORTRAIT
        =================================================== */

        @media (
          max-width: 850px
        ) {

          .aura-hero-container {

            grid-template-columns:
              1fr;
          }


          .aura-hero-content {

            max-width:
              800px;
          }


          .aura-hero-image {

            height:
              600px;
          }


          .aura-story-container {

            grid-template-columns:
              1fr;
          }


          .aura-story-content {

            max-width:
              800px;
          }


          .aura-story-image {

            max-width:
              650px;
          }


          .aura-philosophy-intro {

            grid-template-columns:
              1fr;

            gap:
              25px;
          }


          .aura-philosophy-title {

            max-width:
              800px;
          }


          .aura-philosophy-item {

            grid-template-columns:
              70px
              1fr
              1fr
              50px;
          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (
          max-width: 700px
        ) {

          .aura-hero {

            padding:
              110px
              18px
              70px;
          }


          .aura-hero-container {

            gap:
              45px;
          }


          .aura-hero-title {

            font-size:
              clamp(
                49px,
                14vw,
                70px
              );

            margin:
              25px
              0
              27px;
          }


          .aura-hero-description {

            font-size:
              13px;

            line-height:
              1.8;
          }


          .aura-hero-meta {

            margin-top:
              32px;

            gap:
              11px;
          }


          .aura-hero-image {

            height:
              450px;

            min-height:
              0;
          }


          .aura-image-border {

            inset:
              12px
              -10px
              -10px
              12px;
          }


          .aura-story {

            padding:
              85px
              18px;
          }


          .aura-story-container {

            gap:
              45px;
          }


          .aura-story-image {

            height:
              430px;
          }


          .aura-story-title {

            font-size:
              clamp(
                40px,
                11vw,
                58px
              );

            margin:
              25px
              0
              30px;
          }


          .aura-story-text {

            gap:
              16px;
          }


          .aura-story-text p {

            font-size:
              13px;

            line-height:
              1.8;
          }


          .aura-philosophy {

            padding:
              90px
              18px;
          }


          .aura-philosophy-intro {

            margin-bottom:
              55px;
          }


          .aura-philosophy-title {

            font-size:
              clamp(
                47px,
                13vw,
                68px
              );
          }


          .aura-philosophy-description {

            font-size:
              13px;
          }


          .aura-philosophy-item {

            display:
              grid;

            grid-template-columns:
              42px
              1fr
              42px;

            gap:
              12px;

            min-height:
              auto;

            padding:
              28px
              0;
          }


          .aura-philosophy-item:hover {

            padding:
              28px
              8px;
          }


          .aura-point-number {

            align-self:
              start;
          }


          .aura-point-title {

            grid-column:
              2;
          }


          .aura-point-title h3 {

            font-size:
              20px;
          }


          .aura-point-description {

            grid-column:
              2;
          }


          .aura-point-description p {

            font-size:
              12px;

            line-height:
              1.7;
          }


          .aura-point-arrow {

            grid-column:
              3;

            grid-row:
              1;

            width:
              36px;

            height:
              36px;
          }


          .aura-stats {

            padding:
              65px
              18px;
          }


          .aura-stats-header {

            display:
              block;

            margin-bottom:
              45px;
          }


          .aura-stats-title {

            font-size:
              clamp(
                42px,
                12vw,
                60px
              );
          }


          .aura-stats-grid {

            grid-template-columns:
              repeat(
                2,
                1fr
              );
          }


          .aura-stat {

            min-height:
              125px;

            padding:
              20px
              15px;
          }


          .aura-stat:nth-child(
            3
          ),
          .aura-stat:nth-child(
            4
          ) {

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.16
              );
          }


          .aura-stat:nth-child(
            3
          ) {

            border-left:
              0;
          }


          .aura-stat-number {

            font-size:
              40px;
          }


          .aura-stat-label {

            font-size:
              7px;

            line-height:
              1.5;
          }


          .aura-cta {

            padding:
              95px
              18px;
          }


          .aura-cta-title {

            font-size:
              clamp(
                49px,
                14vw,
                70px
              );
          }


          .aura-cta-description {

            font-size:
              13px;

            line-height:
              1.8;
          }


          .aura-cta-button {

            font-size:
              8px;

            padding-left:
              18px;
          }


          .aura-cta-arrow {

            width:
              35px;

            height:
              35px;
          }


          .aura-hero-orbit,
          .aura-cta-orbit {

            width:
              420px;

            height:
              420px;

            right:
              -280px;
          }

        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (
          max-width: 480px
        ) {

          .aura-hero {

            padding:
              100px
              15px
              60px;
          }


          .aura-hero-title {

            font-size:
              49px;
          }


          .aura-hero-image {

            height:
              390px;
          }


          .aura-story {

            padding:
              70px
              15px;
          }


          .aura-story-image {

            height:
              370px;
          }


          .aura-story-title {

            font-size:
              43px;
          }


          .aura-philosophy {

            padding:
              70px
              15px;
          }


          .aura-philosophy-title {

            font-size:
              48px;
          }


          .aura-stats {

            padding:
              50px
              15px;
          }


          .aura-stat {

            min-height:
              105px;

            padding:
              15px
              10px;
          }


          .aura-stat-number {

            font-size:
              32px;
          }


          .aura-stat-label {

            font-size:
              6.5px;
          }


          .aura-cta {

            padding:
              80px
              15px;
          }


          .aura-cta-title {

            font-size:
              50px;
          }

        }


        /* ===================================================
           ACCESSIBILITY
        =================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .aura-reveal,
          .aura-image-reveal,
          .aura-image-clip img,
          .aura-image-clip::after,
          .aura-cta-button,
          .aura-cta-arrow {

            transition:
              none !important;

          }


          .aura-reveal {

            opacity:
              1;

            filter:
              none;

            transform:
              none;
          }


          .aura-image-reveal {

            opacity:
              1;

            transform:
              none;
          }


          .aura-image-clip img {

            transform:
              none;
          }

        }

      `}</style>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar
        brand={siteData.brand}
        links={
          siteData.navbar.links
        }
        button={
          siteData.navbar.button
        }
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="aura-hero">

        <div className="aura-hero-orbit" />

        <div className="aura-hero-container">


          <div className="aura-hero-content">

            <Reveal
              direction="left"
            >

              <SectionLabel number="01">
                {hero.eyebrow}
              </SectionLabel>

            </Reveal>


            <Reveal
              direction="up"
              delay={120}
            >

              <h1 className="aura-hero-title">

                {hero.title}

                <em>
                  {hero.titleAccent}
                </em>

              </h1>

            </Reveal>


            <Reveal
              direction="up"
              delay={240}
            >

              <p className="aura-hero-description">
                {hero.description}
              </p>

            </Reveal>


            <Reveal
              direction="up"
              delay={360}
            >

              <div className="aura-hero-meta">

                <span>
                  Ovia Wellness
                </span>

                <span className="aura-meta-dot">
                  •
                </span>

                <span>
                  WELLNESS
                </span>

                <span className="aura-meta-dot">
                  •
                </span>

                <span>
                  YOUR TIME
                </span>

              </div>

            </Reveal>

          </div>


          <RevealImage
            src={hero.image}
            alt={
              hero.imageAlt ||
              hero.title
            }
            className="aura-hero-image"
            direction="right"
            delay={180}
          />

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="aura-story">

        <div className="aura-story-container">


          <RevealImage
            src={story.image}
            alt={
              story.imageAlt ||
              story.title
            }
            className="aura-story-image"
            direction="left"
            delay={100}
          />


          <div className="aura-story-content">

            <Reveal
              direction="right"
            >

              <SectionLabel number="02">
                {story.eyebrow}
              </SectionLabel>

            </Reveal>


            <Reveal
              direction="up"
              delay={120}
            >

              <h2 className="aura-story-title">
                {story.title}
              </h2>

            </Reveal>


            <div className="aura-story-text">

              {story.description.map(
                (
                  paragraph,
                  index
                ) => (

                  <Reveal
                    key={index}
                    direction={
                      index % 2 === 0
                        ? "right"
                        : "up"
                    }
                    delay={
                      220 +
                      index * 130
                    }
                  >

                    <p>
                      {paragraph}
                    </p>

                  </Reveal>

                )
              )}

            </div>

          </div>

        </div>

      </section>






    </main>
  );
}