import "aos/dist/aos.css";

import MainHero from "./components/hero/MainHero";
import EventsWrapper from "./components/events/EventsWrapper";
import AboutUs from "./components/aboutUs/AboutUs";
import CharactersWrapper from "./components/characters/CharactersWrapper";
import ReviewsWrapper from "./components/reviews/ReviewsWrapper";
import ServicesWrapper from "./components/services/ServicesWrapper";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="bg-[url('/backgrounds/main.png')] bg-contain bg-center items-center justify-center min-h-full xl:min-h-screen pt-8 pb-4 sm:p-20 gap-16"
      >
        <MainHero />
      </div>
      {/* <svg
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.28 2.17"
        preserveAspectRatio="none"
      >
        <path
          d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z"
          fill="#9eb3c2"
        />
      </svg> */}
      <svg
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        width="1000"
        height="50"
      >
        <g transform="scale(1,-1)" transformOrigin="50%">
          <path
            d="M1000 0H0v52C62.49 28.01 125.02 4 250 4c250.03 0 249.97 96 500 96 124.98 0 187.51-24.01 250-48V0Z"
            fill="#9eb3c2"
          />
        </g>
      </svg>
      <div className="relative">
        {/* <svg
          className="w-full h-auto block absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"
            fill="white"
          ></path>
        </svg> */}
        {/* <svg
          data-name="Layer 1"
          className="w-full h-auto block absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg> */}
      </div>
      <div
        id="events"
        className="bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <EventsWrapper />
      </div>
      <div
        id="aboutUs"
        className="bg-[url('/backgrounds/about-us.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <AboutUs />
      </div>
      <div
        id="chars"
        className="bg-[url('/backgrounds/chars.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <CharactersWrapper />
      </div>
      <div
        id="reviews"
        className="bg-[url('/backgrounds/reviews.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <ReviewsWrapper />
      </div>
      <div
        id="services"
        className="bg-slate-400 bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <ServicesWrapper />
      </div>
    </>
  );
}
