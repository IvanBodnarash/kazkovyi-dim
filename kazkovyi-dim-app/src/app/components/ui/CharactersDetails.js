import { PortableText } from "next-sanity";
import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ModalPortal from "./ModalPortal";
import { motion } from "motion/react";
import { portableTextNormalizer } from "@/app/utils/portableTextHelper";

export default function CharactersDetails({ data, onClose }) {
  const processedImg = processImage(data.img);

  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-opacity-30 bg-black/40 backdrop-blur-sm m-auto"
        onClick={onClose}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="cursor-pointer absolute text-ochre-500 right-4 top-4 block md:hidden"
        >
          <IoClose size={28} className="cursor-pointer absolute text-ochre-500 right-6 top-6 block md:hidden" />
        </button>

        <div className="flex justify-center items-center shadow-lg p-4 md:p-6 h-full">
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
            className="bg-crema border border-ochre/70 flex flex-col md:flex-row gap-2 md:gap-6 rounded-2xl m-5 md:m-10 lg:m-50 xl:m-70 p-6 h-fit max-h-130 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-ochre p-2 rounded-xl relative">
              <Image
                src={processedImg}
                width={800}
                height={400}
                className="rounded-xl h-70 min-w-70 lg:w-100 lg:h-100 object-cover"
                alt="chars-details"
              />
            </div>

            <div className="w-full md:w-2/4 overflow-auto">
              <div className="flex flex-row justify-between items-start text-ochre-500 font-bold">
                <h1 className="mb-2 text-xl lg:text-2xl">{data.title}</h1>
                <button aria-label="Close" onClick={onClose} className="hover:opacity-50 transition-opacity">
                  <IoClose size={28} className="cursor-pointer hidden md:block" />
                </button>
              </div>
              <div className="text-ochre-500 text-sm md:text-md lg:text-lg">
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
          </motion.div>
        </div>
      </motion.div>
    </ModalPortal>
  );
}
