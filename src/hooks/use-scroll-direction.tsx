import { useEffect, useState } from "react";

const useScrollDirection = (height: number = 50) => {
  const [scrollDirection, setScrollDirection] = useState<null | boolean>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection(false); // downscroll
      } else if (st > height) {
        setScrollDirection(true); // upscroll only if above given height
      } else {
        setScrollDirection(false); // always false if below given height
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, height]);

  return scrollDirection;
};

export default useScrollDirection;
