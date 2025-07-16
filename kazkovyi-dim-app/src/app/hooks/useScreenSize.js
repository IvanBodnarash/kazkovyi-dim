import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const resolution = window.innerWidth;
      const isMobile = resolution >= 320 && resolution <= 480;
      const isTablet = resolution >= 768 && resolution <= 1024;

      if (isMobile) {
        setDevice("mobile");
      }
      if (isTablet) {
        setDevice("table");
      }
      if (!isMobile && !isTablet) {
        setDevice("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
