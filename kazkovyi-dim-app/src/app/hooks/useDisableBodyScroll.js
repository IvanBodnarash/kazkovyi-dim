import { useEffect } from "react";

export default function useDisableBodyScroll(isActive) {
  useEffect(() => {
    if (!isActive) return;

    document.documentElement.classList.add("modal-open");

    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, [isActive]);
}
