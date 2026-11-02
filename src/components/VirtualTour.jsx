"use client";

import { Maximize2, Move3D } from "lucide-react";

export default function VirtualTour() {
const tourUrl =
"https://tour.panoee.net/6a8ecd6455f69aa947a5e300";

const handleFullscreen = () => {
const iframe = document.getElementById("ella-spa-tour");


if (iframe?.requestFullscreen) {
  iframe.requestFullscreen();
}


};

return ( <section className="virtual-tour-section"> <div className="virtual-tour-container">


    {/* Header */}
    <div className="virtual-tour-header">

      <div className="tour-label">
        <span className="label-line"></span>
        <span>360° EXPERIENCE</span>
        <span className="label-line"></span>
      </div>

      <h2>
        Step Inside
        <span> Ella Spa WhiteField</span>
      </h2>

      <p>
        Explore our peaceful spa environment from anywhere.
        Move through our spaces and experience the ambience before
        your visit.
      </p>

    </div>

    {/* Tour Card */}
    <div className="tour-card">

      {/* Top Bar */}
      <div className="tour-topbar">

        <div className="tour-info">
          <Move3D size={20} />
          <div>
            <strong>Virtual Tour</strong>
            <small>Drag to explore • Scroll to zoom</small>
          </div>
        </div>

        <button
          type="button"
          className="fullscreen-button"
          onClick={handleFullscreen}
          aria-label="Open virtual tour fullscreen"
        >
          <Maximize2 size={17} />
          <span>Fullscreen</span>
        </button>

      </div>

      {/* Panoee */}
      <div className="tour-viewer">

        <iframe
          id="ella-spa-tour"
          src={tourUrl}
          title="Ella Spa WhiteField 360 Virtual Tour"
          allow="fullscreen; autoplay; gyroscope; accelerometer"
          allowFullScreen
          loading="lazy"
        />

        <div className="viewer-badge">
          <Move3D size={15} />
          <span>360° Virtual Tour</span>
        </div>

      </div>

    </div>

    {/* Bottom Text */}
    <div className="tour-footer">

      <div className="footer-line"></div>

      <p>
        Discover the ambience. Explore every corner.
        <strong> Experience Ella Spa.</strong>
      </p>

      <div className="footer-line"></div>

    </div>

  </div>

  <style jsx>{`
    .virtual-tour-section {
      position: relative;
      width: 100%;
      padding: 100px 20px;
      overflow: hidden;
      background: #101815;
    }

    .virtual-tour-section::before {
      content: "";
      position: absolute;
      width: 500px;
      height: 500px;
      top: -250px;
      left: -250px;
      border-radius: 50%;
      background: rgba(190, 155, 93, 0.08);
      pointer-events: none;
    }

    .virtual-tour-section::after {
      content: "";
      position: absolute;
      width: 450px;
      height: 450px;
      right: -220px;
      bottom: -220px;
      border-radius: 50%;
      background: rgba(190, 155, 93, 0.06);
      pointer-events: none;
    }

    .virtual-tour-container {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
    }

    /* Header */

    .virtual-tour-header {
      max-width: 800px;
      margin: 0 auto 45px;
      text-align: center;
    }

    .tour-label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin-bottom: 20px;

      color: #c6a66b;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 4px;
    }

    .label-line {
      width: 35px;
      height: 1px;
      background: #c6a66b;
      opacity: 0.7;
    }

    .virtual-tour-header h2 {
      margin: 0;
      color: #ffffff;
      font-size: clamp(36px, 5vw, 62px);
      line-height: 1.12;
      font-weight: 400;
      letter-spacing: -1px;
    }

    .virtual-tour-header h2 span {
      display: block;
      color: #c6a66b;
      font-family: Georgia, serif;
      font-style: italic;
    }

    .virtual-tour-header p {
      max-width: 650px;
      margin: 22px auto 0;
      color: rgba(255, 255, 255, 0.68);
      font-size: 16px;
      line-height: 1.8;
    }

    /* Card */

    .tour-card {
      overflow: hidden;
      border: 1px solid rgba(198, 166, 107, 0.25);
      border-radius: 18px;
      background: #151e1a;
      box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.02);
    }

    /* Top Bar */

    .tour-topbar {
      min-height: 70px;
      padding: 14px 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .tour-info {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #c6a66b;
    }

    .tour-info div {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .tour-info strong {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
    }

    .tour-info small {
      color: rgba(255, 255, 255, 0.45);
      font-size: 11px;
    }

    .fullscreen-button {
      display: flex;
      align-items: center;
      gap: 8px;

      padding: 10px 15px;

      border: 1px solid rgba(198, 166, 107, 0.4);
      border-radius: 7px;

      background: transparent;
      color: #c6a66b;

      font-size: 12px;
      cursor: pointer;

      transition: all 0.3s ease;
    }

    .fullscreen-button:hover {
      background: #c6a66b;
      border-color: #c6a66b;
      color: #101815;
    }

    /* Viewer */

    .tour-viewer {
      position: relative;
      width: 100%;
      height: 720px;
      background: #080c0a;
    }

    .tour-viewer iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .viewer-badge {
      position: absolute;
      left: 18px;
      bottom: 18px;

      display: flex;
      align-items: center;
      gap: 7px;

      padding: 8px 12px;

      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 6px;

      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);

      color: rgba(255, 255, 255, 0.8);
      font-size: 11px;

      pointer-events: none;
    }

    /* Footer */

    .tour-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      margin-top: 30px;
    }

    .tour-footer p {
      margin: 0;
      color: rgba(255, 255, 255, 0.55);
      font-size: 13px;
      text-align: center;
    }

    .tour-footer strong {
      color: #c6a66b;
      font-weight: 500;
    }

    .footer-line {
      width: 50px;
      height: 1px;
      background: rgba(198, 166, 107, 0.5);
    }

    /* Tablet */

    @media (max-width: 900px) {
      .virtual-tour-section {
        padding: 75px 16px;
      }

      .tour-viewer {
        height: 600px;
      }
    }

    /* Mobile */

    @media (max-width: 600px) {
      .virtual-tour-section {
        padding: 60px 12px;
      }

      .virtual-tour-header {
        margin-bottom: 30px;
      }

      .tour-label {
        font-size: 9px;
        letter-spacing: 3px;
      }

      .virtual-tour-header h2 {
        font-size: 36px;
      }

      .virtual-tour-header p {
        margin-top: 16px;
        font-size: 14px;
        line-height: 1.7;
      }

      .tour-card {
        border-radius: 12px;
      }

      .tour-topbar {
        min-height: 62px;
        padding: 10px 12px;
      }

      .tour-info small {
        display: none;
      }

      .tour-info strong {
        font-size: 12px;
      }

      .fullscreen-button {
        width: 38px;
        height: 38px;
        justify-content: center;
        padding: 0;
      }

      .fullscreen-button span {
        display: none;
      }

      .tour-viewer {
        height: 500px;
      }

      .viewer-badge {
        left: 10px;
        bottom: 10px;
        padding: 7px 9px;
      }

      .tour-footer {
        gap: 10px;
      }

      .footer-line {
        width: 25px;
      }

      .tour-footer p {
        font-size: 11px;
      }
    }

    @media (max-width: 400px) {
      .tour-viewer {
        height: 450px;
      }
    }
  `}</style>
</section>


);
}
