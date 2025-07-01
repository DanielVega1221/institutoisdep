import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./VolumeControl.css";

const VolumeControl = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Crea el objeto Audio solo una vez
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Handler universal para cualquier interacción
    const resumeAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    // Intenta reproducir automáticamente
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        // Escucha cualquier interacción táctil o click
        window.addEventListener("touchstart", resumeAudio, { once: true, passive: false });
        window.addEventListener("pointerdown", resumeAudio, { once: true, passive: false });
        window.addEventListener("click", resumeAudio, { once: true, passive: false });
      });

    return () => {
      audio.pause();
      window.removeEventListener("touchstart", resumeAudio);
      window.removeEventListener("pointerdown", resumeAudio);
      window.removeEventListener("click", resumeAudio);
    };
    // eslint-disable-next-line
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  return (
    <div className="volume-container">
      <div className={`glow-wrapper ${isPlaying && !muted ? "glow-active" : ""}`}>
        <motion.button
          className="volume-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
        >
          <Music2 size={24} color="#fff" strokeWidth={2.2} />
        </motion.button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="volume-menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volume-slider"
              />
              <button
                onClick={() => setMuted((prev) => !prev)}
                aria-label={muted ? "Desmutear" : "Mutear"}
                className="mute-btn-icon"
              >
                {muted ? (
                  <VolumeX size={20} color="#fff" strokeWidth={2.2} />
                ) : (
                  <Volume2 size={20} color="#fff" strokeWidth={2.2} />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VolumeControl;
