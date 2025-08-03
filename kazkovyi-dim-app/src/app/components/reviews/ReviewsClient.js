"use client";

import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ReviewBubble from "../ui/ReviewBubble";
import Image from "next/image";

export default function ReviewsClient({ reviews }) {
  const [currentPortion, setCurrentPortion] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextPortion = () =>
    setCurrentPortion((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  const prevPortion = () =>
    setCurrentPortion((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));

  const startIndex = currentPortion * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleReviews = reviews.slice(startIndex, endIndex);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-ochre-500"
          >
            Відгуки Клієнтів
          </h1>
          <div
            data-aos="fade-zoom-in"
            className="flex flex-col lg:flex-row mt-6 lg:mt-0 justify-center items-center gap-8"
          >
            <div className="bg-slate-500/60 p-3 rounded-4xl relative flex justify-center overflow-hidden h-140 lg:h-full w-full lg:w-180">
              <div className="absolute inset-0 bg-[url('/backgrounds/reviews-inner.png')] bg-cover opacity-40 z-0 m-3 rounded-4xl"></div>
              <div className="relative z-10 flex items-center gap-1 lg:gap-8 max-h-full lg:h-100 my-4 px-2 lg:px-0">
                <IoIosArrowDropleft
                  className="text-white text-5xl cursor-pointer"
                  onClick={prevPortion}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPortion}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-center items-center gap-4"
                  >
                    {visibleReviews.map((review, index) => (
                      <ReviewBubble
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        key={index}
                        data={review}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
                <IoIosArrowDropright
                  className="text-white text-5xl cursor-pointer"
                  onClick={nextPortion}
                />
              </div>
            </div>
            <div>
              <Image
                data-aos="fade-up"
                src="/stickers/bunny.png"
                width={800}
                height={400}
                alt="bunny"
                className="size-76 md:size-96 lg:size-[500px] xl:size-[530px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
