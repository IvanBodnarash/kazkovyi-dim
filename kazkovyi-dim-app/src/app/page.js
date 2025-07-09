import Link from "next/link";
import MainHero from "./components/hero/MainHero";
import InstEvents from "./components/events/InstEvents";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-[url('/backgrounds/main.png')] bg-contain bg-center items-center justify-center min-h-full xl:min-h-screen pt-8 sm:p-20 gap-16">
        <MainHero />
      </div>
      <div id="inst-events" className="bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16">
        <InstEvents />
      </div>
    </>
  );
}
