import { PortableText } from "next-sanity";
import processImage from "@/app/utils/imageProcessor";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { IoClose } from "react-icons/io5";
import ModalPortal from "./ModalPortal";
import { motion } from "motion/react";
import { portableTextNormalizer } from "@/app/utils/portableTextHelper";

export default function EventDetails({ data, onClose }) {
  const processedImg = processImage(data.img);

  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        {/* Mobile Close */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="cursor-pointer absolute text-ochre-500 right-4 top-4 block md:hidden"
        >
          <IoClose size={28} />
        </button>

        <div className="flex min-h-dvh justify-center p-4 md:p-6">
          <div
            className="
                bg-crema
                border border-ochre/70
                flex flex-col md:flex-row
                justify-center items-stretch md:items-start
                gap-2 md:gap-6
                rounded-2xl
                p-4 md:p-6
                my-auto
                w-full
                max-w-7xl
                max-h-[calc(100dvh-6rem)]
                md:max-h-[calc(100dvh-3rem)]
                overflow-y-auto
                transition-all
              "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-ochre p-2 rounded-xl relative w-full md:w-auto">
              <div className="absolute right-5 bottom-8 rounded-sm bg-cielo/80 p-1">{data.processedDate}</div>
              <ImageWithSkeleton
                className="rounded-xl h-60 w-full lg:w-100 lg:h-100 object-cover"
                src={processedImg}
                width={200}
                height={200}
                alt="eventsImg"
              />
            </div>

            <div className="w-full md:w-3/4 overflow-y-auto md:overflow-hidden">
              <div className="flex flex-row justify-between items-center text-ochre-500 font-bold">
                <h1 className="mb-2 text-lg lg:text-2xl">{data.title}</h1>

                {/* Desktop Close */}
                <button aria-label="Close" onClick={onClose} className="cursor-pointer hidden md:block">
                  <IoClose size={24} />
                </button>
              </div>
              <div className="text-ochre-500 text-sm md:text-md lg:text-[16px]">
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
          </div>
        </div>
      </motion.div>
    </ModalPortal>
  );
}
