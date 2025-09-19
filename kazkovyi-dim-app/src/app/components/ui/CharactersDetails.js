import { PortableText } from "next-sanity";
import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function CharactersDetails({ data, onClose }) {
  const processedImg = processImage(data.img);

  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm m-auto"
      onClick={() => onClose()}
    >
      <IoClose size={28} className="cursor-pointer absolute text-ochre-500 right-6 top-6 block md:hidden" />
      <div className="flex justify-center items-center shadow-lg p-6 h-full">
        <div className="bg-crema border border-ochre/70 flex flex-col md:flex-row gap-2 md:gap-6 rounded-2xl m-5 md:m-10 lg:m-50 xl:m-70 p-6 shadow-xl transition-all">
          <div className="bg-ochre p-2 rounded-xl relative">
            <Image
              src={processedImg}
              width={800}
              height={400}
              className="rounded-xl h-70 min-w-70 lg:w-100 lg:h-100 object-cover"
              alt="chars-details"
            />
          </div>

          <div className="w-full md:w-2/4">
            {/* <h1 className="text-ochre-500 text-md md:text-lg lg:text-xl mb-2 font-bold">
              {data.title}
            </h1> */}
            <div className="flex flex-row justify-between items-center text-ochre-500 font-bold">
              <h1 className="mb-2 text-xl lg:text-2xl">{data.title}</h1>
              <IoClose size={24} className="cursor-pointer hidden md:block" />
            </div>
            <div className="text-ochre-500 text-sm md:text-md lg:text-lg">
              <PortableText
                value={data.description}
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
    </div>
  );
}
