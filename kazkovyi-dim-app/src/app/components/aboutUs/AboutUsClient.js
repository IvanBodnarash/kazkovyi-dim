"use client";

import Image from "next/image";

import processImage from "@/app/utils/imageProcessor";
import { PortableText } from "next-sanity";
import { useTranslation } from "react-i18next";
import { portableTextNormalizer } from "@/app/utils/portableTextHelper";

import { motion, useMotionValue, useSpring } from "motion/react";

export default function AboutUsClient({ aboutUsData }) {
  const { t } = useTranslation();
  const processedImg = processImage(aboutUsData[0].image);

  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  const rotateX = useSpring(rotateXValue, {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 180,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXAmount = ((y - centerY) / centerY) * -8;
    const rotateYAmount = ((x - centerX) / centerX) * 8;

    rotateXValue.set(rotateXAmount);
    rotateYValue.set(rotateYAmount);
  };

  const handleMouseLeave = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <div className="mx-auto max-w-7xl px-8 pb-8 lg:pb-0 md:px-6 lg:px-8">
      <div className="mt-0 lg:mt-14 items-center font-calibri">
        <h1
          data-aos="fade-up"
          className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-ochre-500"
        >
          {t("categories.about")}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay={100}
          className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8 gap-10"
        >
          <div className="w-full md:max-w-100" style={{ perspective: "1000px" }}>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="rounded-3xl cursor-pointer"
            >
              <motion.div
                whileHover={{
                  scale: [1.03, 1.05, 1.03],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="rounded-3xl"
              >
                <Image
                  src={processedImg}
                  width={800}
                  height={400}
                  alt="aboutUs"
                  className="h-60 md:h-110 w-full rounded-3xl shadow-xl/20 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            className="text-ochre-500 text-md md:text-lg lg:text-xl text-shadow-2xs"
          >
            <PortableText
              value={aboutUsData[0].description}
              components={{
                block: portableTextNormalizer,
                marks: {
                  link: ({ value, children }) => {
                    const target = value?.href?.startsWith("http") ? "_blank" : undefined;
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
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
