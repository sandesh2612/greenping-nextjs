
"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Show button after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes wa-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.9);
            opacity: 0;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        @keyframes wa-ping2 {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          70% {
            transform: scale(2.4);
            opacity: 0;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        @keyframes wa-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-6px);
          }
          75% {
            transform: translateY(-3px);
          }
        }

        @keyframes wa-fadein {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .wa-wrapper {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .wa-wrapper.visible {
          opacity: 1;
          pointer-events: auto;
          animation: wa-fadein 0.5s ease forwards;
        }

        /* Ripple Rings */

        .wa-ring,
        .wa-ring2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25d366;
        }

        .wa-ring {
          animation: wa-ping 2.2s ease-out infinite;
        }

        .wa-ring2 {
          animation: wa-ping2 2.2s ease-out infinite 0.4s;
        }

        /* Button */

        .wa-btn {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 9999px;
          background: #25d366;
          color: #fff;
          font-size: 1.9rem;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
          transition: all 0.3s ease;
        }

        .wa-btn:hover {
          background: #1ebe5d;
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.55);
          animation: wa-bounce 0.6s ease;
        }

        .wa-btn:focus-visible {
          outline: 3px solid #25d366;
          outline-offset: 4px;
        }

        @media (max-width: 768px) {
          .wa-btn {
            width: 56px;
            height: 56px;
            font-size: 1.7rem;
          }
        }

        @media (max-width: 480px) {
          .wa-btn {
            width: 52px;
            height: 52px;
            font-size: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-ring,
          .wa-ring2,
          .wa-wrapper.visible,
          .wa-btn:hover {
            animation: none;
          }
        }
      `}</style>

      <div
        className={`wa-wrapper fixed bottom-5 right-5 sm:bottom-7 sm:right-7 md:bottom-8 md:right-8 z-[9999] ${
          visible ? "visible" : ""
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Ripple Effect */}
          <div className="wa-ring"></div>
          <div className="wa-ring2"></div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918109540259?text=Hello%21%20I%20need%20help%20with%20GreenPing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="wa-btn"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
};
