import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";

export default function ServiceCard({
  title,
  img,
  shortDescription,
  description,
  gallery,
  setShowDetailsModal,
  setSelectedData,
  ...props
}) {
  const processedImg = processImage(img);

  return (
    <div {...props} className="service-ticket-shadow">
      <div
        className="
          service-ticket
          group
          bg-crema
          hover:bg-ochre-500
          w-5/6 md:w-96
          h-full
          m-auto
          p-3 md:p-4
          cursor-pointer
          hover:scale-102
          transform-gpu
          transition-all
          duration-300
        "
        onClick={() => {
          setSelectedData({
            title,
            img,
            description,
            gallery,
          });

          setShowDetailsModal(true);
        }}
      >
        <div className="bg-ochre p-2 rounded-xl">
          <Image
            className="rounded-xl h-42 w-full object-cover"
            src={processedImg}
            width={800}
            height={400}
            alt={title}
          />
        </div>

        <div className="ticket-divider" />

        <div className="pt-4 min-h-26 flex flex-col items-center">
          <h1
            className="
              text-xl md:text-2xl
              font-black
              text-center
              text-ochre-500
              group-hover:text-crema
              transition-colors
              duration-300
            "
          >
            {title}
          </h1>

          {shortDescription && (
            <p
              className="
                text-sm md:text-base
                text-center
                text-ochre-500/80
                group-hover:text-crema/80
                transition-colors
                duration-300
                line-clamp-3
              "
            >
              {shortDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
