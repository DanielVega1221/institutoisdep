import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreenStyle.css";

const LoadingScreen = ({ show, onFinish, onPhaseChange }) => {
  const [phase, setPhase] = useState(show ? "fade-in" : "hidden");
  const fadeOutRef = useRef(false);

  useEffect(() => {
    if (show && phase === "hidden") {
      setPhase("fade-in");
      fadeOutRef.current = false;
    } else if (!show && phase !== "hidden" && phase !== "fade-out") {
      setPhase("fade-out");
      fadeOutRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    let t1, t2;
    if (phase === "fade-in") {
      onPhaseChange?.("fade-in");
      t1 = setTimeout(() => setPhase("content"), 1000);
    }
    if (phase === "content") {
      onPhaseChange?.("content");
      t2 = setTimeout(() => {
        setPhase("fade-out");
        fadeOutRef.current = true;
      }, 2000);
    }
    if (phase === "fade-out") onPhaseChange?.("fade-out");
    if (phase === "hidden") {
      onPhaseChange?.("hidden");
      onFinish?.();
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase, onPhaseChange, onFinish]);

  const handleTransitionEnd = () => {
    if (phase === "fade-out" && fadeOutRef.current) {
      setPhase("hidden");
      fadeOutRef.current = false;
    }
  };

  if (phase === "hidden") return null;

  return (
    <div
      className={`loading-overlay${
        phase === "fade-in" || phase === "content" ? " fade-in" : " fade-out"
      }`}
      onTransitionEnd={handleTransitionEnd}
      style={
        phase === "fade-in"
          ? { animation: "overlayFadeIn 1s forwards" }
          : undefined
      }
    >
      {phase === "content" && (
        <div className="loading-content">
          <span className="loading-icon">
            <svg
              width="60"
              height="60"
              viewBox="0 0 50 50"
              className="gear-spin"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#fff"
                strokeWidth="6"
                opacity="0.2"
              />
              <path
                d="M25 7v6M25 37v6M43 25h-6M13 25H7M36.77 13.23l-4.24 4.24M17.47 32.53l-4.24 4.24M36.77 36.77l-4.24-4.24M17.47 17.47l-4.24-4.24"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="loading-text">Cargando nuevo estilo</span>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
