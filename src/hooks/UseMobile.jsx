import { useEffect, useState } from "react";

export default function useIsMobile() {
  const query = "(max-width: 767px)";

  const [isMobile, setIsMobile] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handler = (e) => {
      setIsMobile(e.matches);
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [isMobile]);

  //   console.log(isMobile);

  return isMobile;
}
