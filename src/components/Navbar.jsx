"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({
  brand,
  links,
  button,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen
              ? "menu-open"
              : ""
            }`}
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={
            menuOpen
          }
        >

          <span />
          <span />

        </button>


        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className="navbar-logo navbar-animation"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={brand.logo}
            alt={brand.logoAlt}
            className="navbar-logo-image"
          />
        </Link>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div
          className={`navbar-links ${menuOpen
              ? "navbar-links-open"
              : ""
            }`}
        >

          {links.map(
            (item, index) => (

              <Link
                key={
                  item.label
                }
                href={
                  item.href
                }
                onClick={() =>
                  setMenuOpen(false)
                }
                className={`
                  navbar-link
                  navbar-animation
                  navbar-delay-${index + 1}
                `}
              >

                {item.label}

              </Link>

            )
          )}

        </div>


        {/* =================================================
            BOOK NOW
        ================================================= */}

        <Link
          href={
            button.href
          }
          className="
            navbar-cta
            navbar-animation
            navbar-delay-5
          "
          onClick={() =>
            setMenuOpen(false)
          }
        >

          <span>
            {button.label}
          </span>

          <span className="navbar-cta-arrow">
            ↗
          </span>

        </Link>

      </div>

    </nav>
  );
}