import { PortableText } from "next-sanity";
import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ModalPortal from "./ModalPortal";
import { motion } from "motion/react";

export default function EventDetails({ data, onClose }) {
  const processedImg = processImage(data.img);

  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto md:overflow-y-hidden min-h-dvh"
        onClick={onClose}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="cursor-pointer absolute text-ochre-500 right-4 top-4 block md:hidden"
        >
          <IoClose size={28} />
        </button>

        <div className="flex min-h-dvh justify-center items-center p-6">
          <div
            className="bg-crema border border-ochre/70 flex flex-col justify-center items-start md:flex-row gap-2 my-8 sm:my-0 md:gap-6 rounded-2xl m-5 md:m-10 lg:m-20 xl:m-30 p-6 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-ochre p-2 rounded-xl relative">
              <div className="absolute right-5 bottom-8 rounded-sm bg-cielo p-1">{data.processedDate}</div>
              <Image
                className="rounded-xl h-60 min-w-70 lg:w-100 lg:h-100 object-cover"
                src={processedImg}
                width={200}
                height={200}
                alt="eventsImg"
              />
            </div>

            <div className="w-full md:w-3/4 overflow-y-auto md:overflow-hidden">
              {/* <h1 className="text-ochre-500 text-md md:text-lg lg:text-xl mb-2 font-bold">
              {data.title}
            </h1> */}
              <div className="flex flex-row justify-between items-center text-ochre-500 font-bold">
                <h1 className="mb-2 text-xl lg:text-2xl">{data.title}</h1>
                <button aria-label="Close" onClick={onClose} className="cursor-pointer hidden md:block">
                  <IoClose size={24} />
                </button>
              </div>
              <div className="text-ochre-500 text-sm md:text-md lg:text-lg">
                <PortableText
                  value={data.description}
                  components={{
                    block: {
                      h1: ({ children }) => <h1 className="text-2xl md:text-3xl font-bold mb-3">{children}</h1>,

                      h2: ({ children }) => <h2 className="text-xl md:text-2xl font-bold mb-2">{children}</h2>,

                      h3: ({ children }) => <h3 className="text-lg md:text-xl font-semibold mb-2">{children}</h3>,

                      normal: ({ children }) => <p className="mb-3">{children}</p>,
                    },
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
