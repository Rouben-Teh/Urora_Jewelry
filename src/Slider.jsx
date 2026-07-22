import React, { useState, useEffect, useRef } from "react";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // 自动播放逻辑
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [index]);

  const startAutoPlay = () => {
    stopAutoPlay();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  const goPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[95dvh] m-auto overflow-hidden rounded-b-3xl">
      <div className="flex h-full transition duration-75 ease-in-out">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-dvw h-dvh opacity-0 transition-opacity duration-500  ${i === index ? "opacity-100" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3.5 h-3.5 my-0 mx-1.5 rounded-full bg-[#D97223] cursor-pointer  ${i === index ? "w-8 bg-[#FFF4E6]" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
