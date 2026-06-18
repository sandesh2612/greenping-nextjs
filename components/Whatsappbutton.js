"use client";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Fade in after 1.5s on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes wa-ping2 {
          0%   { transform: scale(1); opacity: 0.4; }
          70%  { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0);    }
          25%       { transform: translateY(-6px); }
          75%       { transform: translateY(-3px); }
        }
        @keyframes wa-label-in {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: translateY(16px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
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

        /* Ripple rings */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-ping 2.2s ease-out infinite;
        }
        .wa-ring2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-ping2 2.2s ease-out infinite 0.4s;
        }

        /* Main button */
        .wa-btn {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          font-size: 1.6rem;
          box-shadow: 0 6px 24px rgba(37,211,102,0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          text-decoration: none;
        }
        .wa-btn:hover {
          background: #1ebe5d;
          box-shadow: 0 10px 32px rgba(37,211,102,0.55);
          transform: scale(1.1);
          animation: wa-bounce 0.6s ease;
        }
        .wa-btn:focus-visible {
          outline: 3px solid #25D366;
          outline-offset: 4px;
        }

        /* Tooltip label */
        .wa-label {
          position: absolute;
          right: 68px;
          white-space: nowrap;
          background: #0f2b3d;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          pointer-events: none;
          animation: wa-label-in 0.25s ease forwards;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }
        .wa-label::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #0f2b3d;
        }

        /* Notification dot */
        .wa-dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 11px;
          height: 11px;
          background: #ff4d4d;
          border: 2px solid #fff;
          border-radius: 50%;
          z-index: 2;
        }

        @media (max-width: 640px) {
          .wa-btn {
            width: 50px;
            height: 50px;
            font-size: 1.4rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-ring, .wa-ring2 { animation: none; opacity: 0; }
          .wa-btn:hover { animation: none; }
          .wa-wrapper.visible { animation: none; }
        }
      `}</style>

      <div
        className={`wa-wrapper fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-50 flex items-center${visible ? " visible" : ""}`}
      >
        {/* Tooltip on hover */}
        {hovered && (
          <div className="wa-label">
            Chat with us 💬
          </div>
        )}

        {/* Ripple rings + button wrapper */}
        <div className="relative flex items-center justify-center">
          <div className="wa-ring" />
          <div className="wa-ring2" />

          <a
            href="https://wa.me/918109540259?text=Hello%21%20I%20need%20help%20with%20GreenPing"
            className="wa-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <i className="fab fa-whatsapp" />
            {/* Notification dot */}
            <span className="wa-dot" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}