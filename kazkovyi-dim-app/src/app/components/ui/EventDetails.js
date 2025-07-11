import { PortableText } from "next-sanity";
import processImage from "@/app/utils/imageProcessor";

export default function EventDetails({ data, onClose }) {
  const processedImg = processImage(data.img);
  console.log(data);
  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm"
      onClick={() => onClose()}
    >
      <div className="flex justify-center items-center shadow-lg w-full m-auto p-6 h-full">
        <div className="bg-crema flex flex-col md:flex-row gap-2 md:gap-6 rounded-2xl m-5 md:m-10 lg:m-20 xl:m-50 p-6 shadow-xl transition-all">
          <div className="bg-ochre p-2 rounded-xl">
            <img
              className="rounded-xl h-70 min-w-70 lg:w-100 lg:h-100 object-cover"
              src={processedImg}
              alt="placeholder"
            />
          </div>
          <div className="w-full md:w-3/4">
            <h1 className="text-slate-900 text-md md:text-lg lg:text-xl mb-2 font-bold">
              {data.title}
            </h1>
            <div className="text-amber-950 text-sm md:text-md lg:text-lg">
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
