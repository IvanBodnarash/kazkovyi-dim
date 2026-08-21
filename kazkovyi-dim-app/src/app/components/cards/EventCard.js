import processDate from "@/app/utils/dateProcessor";
import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function EventCard({ title, description, img, date, setShowDetailsModal, setSelectedData, ...props }) {
  const { i18n } = useTranslation();
  const processedImg = processImage(img);
  const processedDate = processDate(date, i18n.language);

  return (
    <div {...props}>
      <div
        className="event-card bg-crema border border-ochre/70 rounded-2xl w-5/6 md:w-94 h-120 m-auto p-5 md:p-6 shadow-xl cursor-pointer hover:scale-103 transition-all"
        onClick={() => {
          setSelectedData({
            title,
            description,
            img,
            processedDate,
          });
          setShowDetailsModal(true);
        }}
      >
        <div className="bg-ochre p-1 md:p-2 rounded-xl relative">
          <div className="absolute right-5 bottom-8 rounded-sm bg-cielo/80 py-1 px-3 transition-transform duration-200 ease-out transform-gpu will-change-transform hover:scale-[1.02]">
            {processedDate}
          </div>
          <Image
            src={processedImg}
            width={800}
            height={400}
            alt="eventCardImg"
            className="rounded-xl h-58 w-full md:h-76 md:w-96 object-cover"
          />
        </div>
        <h1 className="mt-2 text-lg md:text-xl font-black text-ochre-500">{title}</h1>
        <p className="line-clamp-3 mt-1 text-ochre-500">
          {description?.[0]?.children?.[0]?.text || "Опис не доступний"}
        </p>
      </div>
    </div>
  );
}
