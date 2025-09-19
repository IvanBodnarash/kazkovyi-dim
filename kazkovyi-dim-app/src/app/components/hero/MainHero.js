"use client";
import Image from "next/image";

import bird from "../../../../public/stickers/bird.png";
import vedmedyk from "../../../../public/stickers/bear.png";
import { useContext, useEffect, useRef, useState } from "react";
import ConnectWithUsContext from "@/app/context/ConnectWithUsContext";
import ContactsPopupHero from "../ui/ContactsPopupHero";
import useAos from "@/app/hooks/useAos";

export default function MainHero() {
  const [isPopupOpened, setIsPopupOpened] = useContext(ConnectWithUsContext);
  const [isPopupHeroOpened, setIsPopupHeroOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && isPopupHeroOpened) {
        setIsPopupHeroOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPopupHeroOpened]);

  useAos();

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row mt-18 lg:mt-0 justify-center items-center">
        <div className="flex">
          <Image
            data-aos="fade-right"
            className="size-14 md:size-16 lg:size-34 rotate-8"
            src={bird}
            alt="bird"
          />
          <div className="max-w-2xl">
            <h1
              data-aos="fade-zoom-in"
              data-aos-delay={100}
              className="hero-text-heading text-7xl sm:text-8xl md:text-[120px] lg:text-[176px] mb-[-5px] md:mb-[-10px] lg:mb-[-15px] xl:mb-[-35px]"
            >
              КазковийДім
            </h1>
            <h2
              data-aos="fade-zoom-in"
              data-aos-delay={200}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl/tight font-calibri font-bold text-shadow-2xs text-ochre pr-5"
            >
              Організація та проведення дитячих свят в Чернівцях
            </h2>
            <p
              data-aos="fade-zoom-in"
              data-aos-delay={300}
              className="text-md md:text-lg lg:text-xl xl:text-2xl text-tender font-calibri font-normal text-shadow-xs mt-2 md:mt-6 pr-8"
            >
              Аніматори, випускні, новорічні свята, дні народження, квести,
              майстер класи, шоу мильних бульбашок, паперове шоу та привітання
              ведмедика
            </p>

            <div className="relative">
              <ContactsPopupHero
                isPopupHeroOpened={isPopupHeroOpened}
                setIsPopupHeroOpened={setIsPopupHeroOpened}
              />

              <button
                data-aos="fade-zoom-in"
                data-aos-delay={400}
                className="mt-4 md:mt-8 font-calibri text-lg md:text-xl cursor-pointer rounded-lg bg-cielo hover:bg-slate-400 transition-all active:bg-slate-600 px-8 md:px-12 py-1.5 md:py-2.5 font-medium text-white shadow-sm"
                type="button"
                onClick={() => {
                  setIsPopupOpened(false);
                  setIsPopupHeroOpened((prevState) => !prevState);
                }}
              >
                Зв&apos;язатися з нами
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
            className="size-76 md:size-96 lg:size-[550px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
