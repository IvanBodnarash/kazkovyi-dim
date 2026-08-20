import { fetchAbouUs } from "@/app/utils/fetchAboutUs";
import AboutUsClient from "./AboutUsClient";

export default async function AboutUsWrapper() {
  const aboutUsData = await fetchAbouUs();

  return <AboutUsClient aboutUsData={aboutUsData} />;
}
