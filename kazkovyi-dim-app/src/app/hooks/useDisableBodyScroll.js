import { useEffect } from "react";

export default function useDisableBodyScroll(isActive) {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    // const header = document.querySelector("#header");
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = `${scrollBarWidth}px`;
      // header.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.documentElement.style.overflow = "scroll";
      document.documentElement.style.paddingRight = "";
      // header.style.paddingRight = "";
    }
    return () => {
      document.documentElement.style.overflow = "scroll";
      document.documentElement.style.paddingRight = "";
      // header.style.paddingRight = "";
    };
  }, [isActive]);
}
