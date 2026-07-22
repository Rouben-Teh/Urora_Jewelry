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
    <div className="flex justify-center items-center gap-10 px-20 max-md:px-0 py-10">
      <button
        className="flex w-10 h-10 p-3! justify-center items-center"
        onClick={prev}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 max-md:gap-5">
        {visible.map((img) => (
          <div key={img} className="aspect-4/3 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={`${import.meta.env.BASE_URL}/${img}`}
              alt="urora-jewelry"
            />
          </div>
        ))}
      </div>

      <button
        className="flex w-10 h-10 p-3! justify-center items-center"
        onClick={next}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
