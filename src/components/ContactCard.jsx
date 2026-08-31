
"use client";

import { useEffect, useRef, useState } from "react";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";

import { siteData } from "@/Data/siteData";


export default function ContactCard() {
  const contact = siteData.contact;

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  /* =====================================================
     SCROLL ANIMATION
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animation runs only once
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     INPUT HANDLER
  ===================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Phone: numbers only + maximum 10 digits
    if (name === "phone") {
      const onlyNumbers = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        phone: onlyNumbers,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            form_key: "frm_ariswellnessspa_553566",
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            notes: formData.notes,
            submitted_from_url: window.location.href,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
          data?.error ||
          "Unable to submit your request."
        );
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });
    } catch (error) {
      console.error("Contact API Error:", error);

      alert(
        error.message ||
        "Unable to submit your request."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know about your spa services and today's availability.";

  const whatsappUrl = `${contact.whatsappUrl
    }?text=${encodeURIComponent(whatsappMessage)}`;

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? "slide-in-fwd-left" : ""
        }`}
    >
      {/* =================================================
          DECORATIVE BACKGROUND
      ================================================= */}

      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />

      <div className="contact-container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="contact-heading">

          <div className="contact-eyebrow">
            <span />
            GET IN TOUCH
            <span />
          </div>

          <h2>
            Make Time For
            <em> Yourself.</em>
          </h2>

          <p>
            Your moment of relaxation is just a
            conversation away. Reach out to our team
            and let us help you plan your perfect spa
            experience.
          </p>

        </div>

        {/* =================================================
            MAIN CONTACT AREA
        ================================================= */}

        <div className="contact-main">

          {/* =================================================
              LEFT CONTACT INFORMATION
          ================================================= */}

          <div className="contact-info-panel">

            <div className="contact-info-top">

              <span className="contact-small-label">
                ARIS WELLNESS SPA
              </span>

              <h3>
                Relaxation
                <br />
                <span>Starts Here.</span>
              </h3>

              <p>
                Whether you are looking for a relaxing
                massage, a wellness treatment or simply
                some peaceful time for yourself, our team
                is here to assist you.
              </p>

            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="contact-details">

              {/* PHONE */}
              <a
                href={contact.phoneUrl}
                className="contact-detail"
              >
                <div className="contact-detail-number">
                  01
                </div>

                <div className="contact-detail-icon">
                  <FaPhoneAlt />
                </div>

                <div className="contact-detail-content">
                  <span>CALL US</span>
                  <strong>
                    {contact.phone}
                  </strong>
                </div>

                <FaArrowUp
                  className="contact-detail-arrow"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-number">
                  02
                </div>

                <div className="contact-detail-icon">
                  <FaWhatsapp />
                </div>

                <div className="contact-detail-content">
                  <span>WHATSAPP</span>
                  <strong>
                    Chat With Us
                  </strong>
                </div>

                <FaArrowUp
                  className="contact-detail-arrow"
                />
              </a>

              {/* EMAIL */}
              <a
                href={contact.emailUrl}
                className="contact-detail"
              >
                <div className="contact-detail-number">
                  03
                </div>

                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>

                <div className="contact-detail-content">
                  <span>EMAIL</span>
                  <strong>
                    {contact.email}
                  </strong>
                </div>

                <FaArrowUp
                  className="contact-detail-arrow"
                />
              </a>

              {/* OPENING HOURS */}

              <div className="contact-detail">
                <div className="contact-detail-number">
                  04
                </div>

                <div className="contact-detail-icon">
                  <FaClock />
                </div>

                <div className="contact-detail-content">
                  <span>OPENING HOURS</span>

                  <strong>
                    Monday – Sunday
                    <br />
                    10:00 AM – 10:00 PM
                  </strong>
                </div>
              </div>

            </div>

            {/* =================================================
                QUICK ACTION BUTTONS
            ================================================= */}

            <div className="contact-actions">

              <a
                href={contact.phoneUrl}
                className="contact-call-btn"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-btn"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

            </div>

          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <div>
                <span>
                  BOOK YOUR EXPERIENCE
                </span>

                <h3>
                  Tell Us How
                  <br />
                  We Can Help.
                </h3>
              </div>

              <div className="contact-form-badge">
                <span>●</span>
                AVAILABLE
              </div>

            </div>

            <p className="contact-form-description">
              Fill in your details and our team will
              contact you shortly to assist with your
              requirements.
            </p>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >

              {/* FULL NAME */}
              <div className="contact-input-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

              </div>

              {/* PHONE */}
              <div className="contact-input-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  required
                />

              </div>

              {/* LOCATION */}
              <div className="contact-input-group">

                <label htmlFor="address">
                  Location
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your area or location"
                  autoComplete="address-level2"
                />

              </div>

              {/* MESSAGE */}
              <div className="contact-input-group">

                <label htmlFor="notes">
                  Message
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us which service you are interested in..."
                  required
                />

              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={loading}
              >

                <span>
                  {loading
                    ? "Sending..."
                    : "Send Enquiry"}
                </span>

                {!loading && (
                  <span className="contact-submit-icon">
                    <FaPaperPlane />
                  </span>
                )}

              </button>

            </form>

            {/* PRIVACY NOTE */}
            <div className="contact-form-note">
              <span>✦</span>

              Your information is kept private and
              used only to respond to your enquiry.
            </div>

          </div>

        </div>

        {/* =================================================
            LOCATION / MAP
        ================================================= */}

        <div className="contact-location">

          <div className="contact-map">

            <iframe
              src={contact.mapUrl}
              title="Aris Wellness Spa location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          {/* ADDRESS CARD */}
          <div className="contact-address-card">

            <div className="contact-address-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-address-content">

              <span>
                VISIT US
              </span>

              <h4>
                Aris Wellness Spa
              </h4>

              <p>
                {contact.address}
              </p>

            </div>

            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-direction-btn"
            >
              <span>
                Get Directions
              </span>

              <FaArrowUp />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

