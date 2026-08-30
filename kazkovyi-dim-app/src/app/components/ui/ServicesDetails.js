"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ModalPortal from "./ModalPortal";
import processImage from "@/app/utils/imageProcessor";
import { portableTextNormalizer } from "@/app/utils/portableTextHelper";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function ServicesDetails({ data, onClose }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const hasGallery = data.gallery?.length > 0;

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setSelectedImageIndex((prev) => (prev === data.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();

    setSelectedImageIndex((prev) => (prev === 0 ? data.gallery.length - 1 : prev - 1));
  };

  return (
    <ModalPortal>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-0 z-50
            bg-black/40
            backdrop-blur-sm
            overflow-y-auto
          "
          onClick={onClose}
        >
          <div className="flex min-h-dvh justify-center items-center p-4 md:p-6">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                service-details-ticket
                bg-crema
                w-full
                max-w-4xl
                p-7 md:p-9
                shadow-xl
              "
            >
              <div className="flex justify-between items-start gap-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-ochre-500">{data.title}</h1>

                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="shrink-0 text-ochre-500 cursor-pointer hover:opacity-50 transition-opacity"
                >
                  <IoClose size={28} />
                </button>
              </div>

              <div className="service-details-divider my-5" />

              <div className="text-ochre-500 text-sm md:text-base lg:text-lg">
                <PortableText
                  value={data.description}
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
                            className="
                              text-gray-600
                              underline
                              hover:text-gray-500
                              transition-colors
                            "
                          >
                            {children}
                          </a>
                        );
                      },
                    },
                  }}
                />
              </div>

              {hasGallery && (
                <>
                  <div className="service-details-divider my-6" />

                  <h2 className="text-lg md:text-xl font-bold text-ochre-500 mb-4">Galería</h2>
                  <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3">
                    {data.gallery.map((image, index) => {
                      const imageUrl = processImage(image);

                      return (
                        <button
                          key={image._key}
                          type="button"
                          onClick={() => openImage(index)}
                          className="shrink-0 border border-ochre snap-start rounded-xl overflow-hidden cursor-pointer"
                        >
                          <ImageWithSkeleton
                            src={imageUrl}
                            width={500}
                            height={350}
                            alt={image.alt || `${data.title} ${index + 1}`}
                            className="
                              w-40 h-40
                              md:w-30 md:h-30
                              object-cover
                              transition-transform
                              duration-300
                              hover:scale-105
                            "
                          />
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeImage}
              className="
                fixed inset-0 z-60
                bg-black/90
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-4 md:p-8
              "
            >
              <button
                aria-label="Close image"
                onClick={closeImage}
                className="
                  absolute
                  right-4 top-4
                  md:right-8 md:top-8
                  text-white
                  cursor-pointer
                  z-20
                  hover:opacity-60
                  transition-opacity
                "
              >
                <IoClose size={32} />
              </button>

              {data.gallery.length > 1 && (
                <button
                  aria-label="Previous image"
                  onClick={prevImage}
                  className="
                    absolute
                    left-3 md:left-8
                    text-white
                    z-20
                    cursor-pointer
                    hover:opacity-60
                    transition-opacity
                  "
                >
                  <IoIosArrowBack size={40} />
                </button>
              )}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  max-w-6xl
                  max-h-[90vh]
                  flex
                  items-center
                  justify-center
                "
              >
                <Image
                  src={processImage(data.gallery[selectedImageIndex])}
                  width={1600}
                  height={1200}
                  alt={data.gallery[selectedImageIndex].alt || `${data.title} ${selectedImageIndex + 1}`}
                  className="
                    max-w-full
                    max-h-[85vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-xl
                  "
                />

                {data.gallery.length > 1 && (
                  <div
                    className="
                      absolute
                      bottom-3
                      left-1/2
                      -translate-x-1/2
                      bg-black/50
                      text-white
                      text-sm
                      px-3 py-1
                      rounded-full
                    "
                  >
                    {selectedImageIndex + 1} / {data.gallery.length}
                  </div>
                )}
              </motion.div>

              {data.gallery.length > 1 && (
                <button
                  aria-label="Next image"
                  onClick={nextImage}
                  className="
                    absolute
                    right-3 md:right-8
                    text-white
                    z-20
                    cursor-pointer
                    hover:opacity-60
                    transition-opacity
                  "
                >
                  <IoIosArrowForward size={40} />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </ModalPortal>
  );
}
