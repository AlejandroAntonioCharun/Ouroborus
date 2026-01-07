import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { RiMusicAiFill } from "react-icons/ri";
import {
  FiPlay,
  FiPause,
  FiX,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";

/* 🎵 PLAYLIST */
const VIDEOS = [
  "fYh66wjJTow",
  "vWaRiD5ym74",
  "3tmd-ClpJxA",
  "JZOsbm3ff7c",
];

export default function FloatingMusicPlayer() {
  const playerRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* 🔑 Detecta interacción real del usuario (clave para móvil) */
  const [userActivated, setUserActivated] = useState(false);

  const currentVideo = VIDEOS[currentIndex];
  const thumbnail = `https://img.youtube.com/vi/${currentVideo}/hqdefault.jpg`;

  /* 🎬 Player listo (NO reproducir aquí) */
  const onReady = (e: any) => {
    playerRef.current = e.target;
    setDuration(e.target.getDuration());
  };

  /* ▶️ Reproducción segura para móviles */
  const activateAudio = () => {
    if (!playerRef.current) return;

    playerRef.current.playVideo(); // ✔️ interacción directa
    setPlaying(true);
    setUserActivated(true);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }

    setPlaying(!playing);
  };

  const seek = (value: number) => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(value, true);
    setProgress(value);
  };

  /* ⏭️ Playlist */
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    setProgress(0);
    setPlaying(false);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? VIDEOS.length - 1 : prev - 1
    );
    setProgress(0);
    setPlaying(false);
  };

  /* ⏱️ Progreso */
  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      if (playerRef.current) {
        setProgress(playerRef.current.getCurrentTime());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [playing]);

  /* ▶️ Auto play del nuevo video SOLO si el usuario ya activó audio */
  useEffect(() => {
    if (userActivated && playerRef.current) {
      playerRef.current.playVideo();
      setPlaying(true);
    }
  }, [currentIndex, userActivated]);

  return (
    <>
      {/* 🔘 BOTÓN FLOTANTE */}
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            activateAudio(); // 👈 obligatorio para móvil
          }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black text-white shadow-lg"
        >
          <RiMusicAiFill size={20} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 left-5 z-50 w-72 rounded-xl bg-black text-white shadow-xl overflow-hidden">
          {/* ❌ CERRAR */}
          <button
            onClick={() => {
              setOpen(false);
              setPlaying(false);
              playerRef.current?.pauseVideo();
            }}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <FiX />
          </button>

          {/* 🖼️ PORTADA */}
          <img
            src={thumbnail}
            alt="Portada"
            className="w-full h-36 object-cover"
          />

          {/* 🎛️ CONTROLES */}
          <div className="p-4 space-y-3">
            <input
              type="range"
              min={0}
              max={duration}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              className="w-full accent-white"
            />

            <div className="flex items-center justify-center gap-5">
              <button onClick={prevVideo}>
                <FiSkipBack />
              </button>

              <button
                onClick={togglePlay}
                className="p-2 bg-white text-black rounded-full"
              >
                {playing ? <FiPause /> : <FiPlay />}
              </button>

              <button onClick={nextVideo}>
                <FiSkipForward />
              </button>
            </div>
          </div>

          {/* 🎧 PLAYER OCULTO */}
          <YouTube
            key={currentVideo}
            videoId={currentVideo}
            opts={{
              height: "0",
              width: "0",
              playerVars: {
                autoplay: 0, // ❌ necesario para móvil
                playsinline: 1,
              },
            }}
            onReady={onReady}
          />
        </div>
      )}
    </>
  );
}
