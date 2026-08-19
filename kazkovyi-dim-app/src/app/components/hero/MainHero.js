"use client";
import Image from "next/image";

import bird from "../../../../public/stickers/bird.png";
import vedmedyk from "../../../../public/stickers/bear.png";
import { useContext, useEffect, useRef, useState } from "react";
import ConnectWithUsContext from "@/app/context/ConnectWithUsContext";
import ContactsPopupHero from "../ui/ContactsPopupHero";
import useAos from "@/app/hooks/useAos";
import { useTranslation } from "react-i18next";

export default function MainHero() {
  const [isPopupHeroOpened, setIsPopupHeroOpened] = useState(false);

  const popupRef = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsPopupHeroOpened(false);
      }
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupHeroOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useAos();

  return (
    <div className="mx-auto max-w-8xl px-4 md:px-4 lg:px-0">
      <div className="flex flex-col md:flex-row mt-18 lg:mt-0 justify-center items-center">
        <div className="flex">
          <Image
            data-aos="fade-right"
            className="size-14 md:size-16 lg:size-30 xl:size-34 rotate-8"
            src={bird}
            alt="bird"
          />
          <div className="max-w-3xl">
            <h1
              data-aos="fade-zoom-in"
              data-aos-delay={100}
              className="hero-text-heading tracking-tight text-7xl sm:text-8xl md:text-[120px] lg:text-[164px] -mb-1.25 md:-mb-2.5 lg:-mb-3.75 xl:-mb-8.75"
            >
              {t("mainHero.title")}
            </h1>
            <h2
              data-aos="fade-zoom-in"
              data-aos-delay={200}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px]/tight font-calibri font-bold text-shadow-2xs text-ochre pr-5"
            >
              {t("mainHero.heading")}
            </h2>
            <p
              data-aos="fade-zoom-in"
              data-aos-delay={300}
              className="text-md md:text-lg lg:text-xl xl:text-2xl text-tender font-calibri italic font-normal text-shadow-xs mt-2 md:mt-6 pr-8"
            >
              {t("mainHero.paragraph")}
            </p>
            <p
              data-aos="fade-zoom-in"
              data-aos-delay={300}
              className="text-md md:text-lg lg:text-xl xl:text-2xl text-tender font-calibri italic font-normal text-shadow-xs mt-2 md:mt-6 pr-8"
            >
              {t("mainHero.paragraph2")}
            </p>

            <div ref={popupRef} className="relative w-fit">
              <ContactsPopupHero isPopupHeroOpened={isPopupHeroOpened} setIsPopupHeroOpened={setIsPopupHeroOpened} />

              <button
                data-aos="fade-zoom-in"
                data-aos-delay={400}
                className="mt-4 md:mt-8 font-calibri text-lg md:text-xl cursor-pointer rounded-lg bg-cielo hover:bg-slate-400 transition-all active:bg-slate-600 px-8 md:px-12 py-1.5 md:py-2.5 font-medium text-white shadow-sm"
                type="button"
                onClick={() => {
                  setIsPopupHeroOpened((prevState) => !prevState);
                }}
              >
                {t("mainHero.connectButton")}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            data-aos="fade-left"
            data-aos-delay={600}
            width={800}
            height={400}
            src={vedmedyk}
            alt="bear"
            priority
            className="size-76 md:size-96 lg:size-137.5 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
