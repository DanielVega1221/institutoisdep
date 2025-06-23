import React, { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./volumeControl.css";

// Asegúrate de importar el archivo de música si lo usas directamente aquí (NO lo necesitas si lo recibes por props):
// import music from '../../assets/Music.mp3'; // <-- Solo si lo usas aquí directamente

const VolumeControl = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Forzar reproducción tras la primera interacción si autoplay falla
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      audio.volume = volume;
      audio.muted = muted;
      // Intenta reproducir automáticamente
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
            // Handler para el primer evento de usuario
            const resumeAudio = () => {
              audio.play().then(() => setIsPlaying(true));
              window.removeEventListener("pointerdown", resumeAudio);
            };
            window.addEventListener("pointerdown", resumeAudio);
          });
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        autoPlay
        loop
        style={{ display: "none" }}
      />

      <div className="volume-card">
        <div
          className={`glow-wrapper ${isPlaying && !muted ? "glow-active" : ""}`}
        >
          <motion.button
            className="volume-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
          >
            <Music2 size={24} />
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="volume-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
              />
              <button
                className="mute-btn"
                onClick={() => setMuted((prev) => !prev)}
              >
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default VolumeControl;
