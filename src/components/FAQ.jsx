"use client";

import { useEffect, useRef, useState } from "react";

export default function FAQ({ data }) {

  const [openIndex, setOpenIndex] =
    useState(null);

  const [visibleItems, setVisibleItems] =
    useState({});

  const itemRefs = useRef([]);


  /* =====================================================
     INTERSECTION OBSERVER
  ===================================================== */

  useEffect(() => {

    const observers = [];

    itemRefs.current.forEach(
      (element, index) => {

        if (!element) return;


        const observer =
          new IntersectionObserver(
            ([entry]) => {

              if (entry.isIntersecting) {

                /*
                 * Small reset before showing.
                 * This guarantees the animation
                 * can restart.
                 */

                setVisibleItems(
                  (previous) => ({
                    ...previous,
                    [index]: false,
                  })
                );


                requestAnimationFrame(() => {

                  requestAnimationFrame(() => {

                    setVisibleItems(
                      (previous) => ({
                        ...previous,
                        [index]: true,
                      })
                    );

                  });

                });

              } else {

                /*
                 * Reset when leaving viewport.
                 *
                 * When the user scrolls back,
                 * the animation starts again.
                 */

                setVisibleItems(
                  (previous) => ({
                    ...previous,
                    [index]: false,
                  })
                );

              }

            },
            {
              threshold: 0.12,

              rootMargin:
                "0px 0px -70px 0px",
            }
          );


        observer.observe(element);

        observers.push(observer);

      }
    );


    return () => {

      observers.forEach(
        (observer) => {
          observer.disconnect();
        }
      );

    };

  }, [data]);


  /* =====================================================
     TOGGLE FAQ
  ===================================================== */

  const toggleFAQ = (index) => {

    setOpenIndex(
      (previous) =>
        previous === index
          ? null
          : index
    );

  };


  /* =====================================================
     SAFETY
  ===================================================== */

  if (!data) {
    return null;
  }


  return (

    <section
      id="faq"
      className="faq-section"
    >

      <div className="faq-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="faq-header">


          {/* EYEBROW */}

          {data.eyebrow && (

            <span className="faq-eyebrow">

              {data.eyebrow}

            </span>

          )}


          {/* TITLE */}

          {data.title && (

            <h2 className="faq-title">

              {data.title}

              {data.titleAccent && (
                <>

                  <br />

                  <em>
                    {data.titleAccent}
                  </em>

                </>
              )}

            </h2>

          )}


          {/* DESCRIPTION */}

          {data.description && (

            <p className="faq-description">

              {data.description}

            </p>

          )}

        </div>


        {/* =================================================
            FAQ LIST
        ================================================= */}

        <div className="faq-list">

          {data.items?.map(
            (item, index) => {

              const isOpen =
                openIndex === index;

              const isVisible =
                visibleItems[index];


              return (

                <article

                  key={
                    item.id ||
                    index
                  }

                  ref={(element) => {

                    itemRefs.current[index] =
                      element;

                  }}

                  className={`
                    faq-item
                    faq-reveal
                    ${
                      isVisible
                        ? "faq-reveal-visible"
                        : ""
                    }
                  `}

                  style={{
                    "--faq-delay":
                      `${index * 100}ms`,
                  }}

                >


                  {/* =====================================
                      QUESTION
                  ====================================== */}

                  <button

                    type="button"

                    className="faq-question"

                    onClick={() =>
                      toggleFAQ(index)
                    }

                    aria-expanded={
                      isOpen
                    }

                    aria-controls={
                      `faq-answer-${index}`
                    }

                  >


                    {/* NUMBER */}

                    <span className="faq-number">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    {/* QUESTION */}

                    <span className="faq-question-text">

                      {item.question}

                    </span>


                    {/* ICON */}

                    <span
                      className="faq-icon"
                      aria-hidden="true"
                    >

                      <span />
                      <span />

                    </span>

                  </button>


                  {/* =====================================
                      ANSWER
                  ====================================== */}

                  <div

                    id={
                      `faq-answer-${index}`
                    }

                    className={`
                      faq-answer-wrapper
                      ${
                        isOpen
                          ? "faq-answer-open"
                          : ""
                      }
                    `}

                  >

                    <div className="faq-answer">

                      <p>
                        {item.answer}
                      </p>

                    </div>

                  </div>

                </article>

              );

            }
          )}

        </div>

      </div>

    </section>

  );

}