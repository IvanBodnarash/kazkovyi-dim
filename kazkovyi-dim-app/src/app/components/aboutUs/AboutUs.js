import Image from "next/image";

import { fetchAbouUs } from "@/app/utils/fetchAboutUs";
import processImage from "@/app/utils/imageProcessor";
import { PortableText } from "next-sanity";

export default async function AboutUs() {
  const aboutUsData = await fetchAbouUs();
  const processedImg = processImage(aboutUsData[0].image);

  return (
    <div className="mx-auto max-w-screen-xl px-8 pb-8 lg:pb-0 md:px-6 lg:px-8">
      <div className="mt-0 lg:mt-14 items-center font-calibri">
        <h1
          data-aos="fade-up"
          className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-ochre-500"
        >
          Про нас
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8 gap-10"
        >
          <Image
            src={processedImg}
            width={800}
            height={400}
            alt="aboutUs"
            className="h-60 md:h-120 w-full md:max-w-100 rounded-3xl shadow-xl/20 hover:scale-105 object-cover cursor-pointer transition-all"
          />
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            className="text-ochre-500 text-md md:text-lg lg:text-xl text-shadow-2xs"
          >
            <PortableText
              value={aboutUsData[0].description}
              components={{
                marks: {
                  link: ({ value, children }) => {
                    const target = value?.href?.startsWith("http")
                      ? "_blank"
                      : undefined;
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={
                          target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-600 underline hover:text-gray-500 transition-colors"
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
