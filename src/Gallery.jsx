import { useMemo, useEffect, useState } from "react";
import useIsMobile from "./hooks/UseMobile";

export default function Gallery() {
  const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
  ];

  const pageSize = useIsMobile() ? 1 : 6;
  const [start, setStart] = useState(0);
  const visible = useMemo(() => {
    return images.slice(start, start + pageSize);
  }, [images, start, pageSize]);

  useEffect(() => {
    setStart(0);
  }, [pageSize]);

  const next = () => {
    const remain = images.length - (start + pageSize);

    if (remain <= 0) {
      setStart(0);
    } else if (remain < pageSize) {
      setStart(start + remain);
    } else {
      setStart(start + pageSize);
    }
  };

  const prev = () => {
    if (start === 0) {
      setStart(images.length - pageSize);
    } else {
      setStart(Math.max(0, start - pageSize));
    }
  };

  return (
    <div className="mx-auto flex w-full items-center justify-center gap-3 px-3 py-8 sm:gap-4 sm:px-6 md:gap-10 md:px-20 md:py-10">
      <button
        aria-label="Previous gallery image"
        className="flex h-9 w-9 shrink-0 items-center justify-center p-0! md:h-10 md:w-10"
        onClick={prev}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="grid min-w-0 flex-1 grid-cols-3 gap-5 max-md:grid-cols-1 md:gap-10">
        {visible.map((img) => (
          <div key={img} className="aspect-4/3 w-full overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src={`${import.meta.env.BASE_URL}/${img}`}
              alt="urora-jewelry"
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Next gallery image"
        className="flex h-9 w-9 shrink-0 items-center justify-center p-0! md:h-10 md:w-10"
        onClick={next}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
