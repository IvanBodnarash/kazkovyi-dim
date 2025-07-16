import { useEffect } from "react";

export default function useDisableBodyScroll(isActive) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isActive]);
}
