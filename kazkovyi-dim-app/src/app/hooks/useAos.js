import AOS from "aos";
import { useEffect } from "react";

export default function useAos() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
}
