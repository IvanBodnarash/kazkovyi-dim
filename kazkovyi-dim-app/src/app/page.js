import "aos/dist/aos.css";

import MainHero from "./components/hero/MainHero";
import EventsWrapper from "./components/events/EventsWrapper";
import AboutUs from "./components/aboutUs/AboutUs";
import CharactersWrapper from "./components/characters/CharactersWrapper";
import ReviewsWrapper from "./components/reviews/ReviewsWrapper";
import ServicesWrapper from "./components/services/ServicesWrapper";
import Footer from "./components/footer/Footer";
import {
  AboutUsSvg,
  CharactersSvg,
  EventsSvg,
  HeroSvg,
  ReviewsSvg,
  ServiceSvg,
} from "./components/ui/SvgElements";
import { metadataData } from "./seo/metadata";
import JsonLd from "./seo/jsonLd";

export const metadata = metadataData;

export default function Home() {
  return (
    <>
      <JsonLd />

      <div className="w-full">
        <div
          id="home"
          className="bg-[url('/backgrounds/main.png')] bg-contain bg-center items-center justify-center min-h-full xl:min-h-screen pt-8 pb-4 sm:p-20 gap-16"
        >
          <MainHero />
        </div>

        <HeroSvg />

        <div
          id="events"
          className="bg-[#9eb3c2] lg:bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
        >
          <EventsWrapper />
        </div>

        <EventsSvg />

        <div
          id="aboutUs"
          className="bg-[url('/backgrounds/about-us.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
        >
          <AboutUs />
        </div>

        <AboutUsSvg />

        <div
          id="chars"
          className="bg-[#9eb3c2] lg:bg-[url('/backgrounds/chars.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
        >
          <CharactersWrapper />
        </div>

        <CharactersSvg />

        <div
          id="reviews"
          className="bg-[url('/backgrounds/reviews.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
        >
          <ReviewsWrapper />
        </div>

        <ReviewsSvg />

        <div
          id="services"
          className="bg-slate-400 bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
        >
          <ServicesWrapper />
        </div>

        <ServiceSvg />

        <Footer />
      </div>
    </>
  );
}
