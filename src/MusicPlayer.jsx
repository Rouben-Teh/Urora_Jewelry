import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ path }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    if (!showTips) return;

    const timer = setTimeout(() => {
      setShowTips(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showTips]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 1;

    // 尝试自动播放
    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
        setShowTips(true);
      });
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    setShowTips(false);

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-100">
      <audio ref={audioRef} loop>
        <source src={path} type="audio/mpeg" />
      </audio>

      {/* Tooltip */}
      <div
        className={`${showTips ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-0 opacity-0"} absolute right-20 bottom-0 mb-3 whitespace-nowrap rounded-lg bg-[#0000007e] px-3 py-2 text-sm text-white shadow-lg
        after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-[#0000007e] transition-all duration-500`}
      >
        Play background music
      </div>

      <div
        onClick={toggleMusic}
        className={`
          w-15
          h-15
          rounded-full
          bg-black
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          cursor-pointer
          ${playing ? "animate-spin [animation-duration:3s]" : ""}
        `}
      >
        <img className="w-15 h-15" src="/vinyl.png" />
      </div>
    </div>
  );
}
