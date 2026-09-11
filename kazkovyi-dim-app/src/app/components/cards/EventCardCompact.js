import processDate from "@/app/utils/dateProcessor";
import processImage from "@/app/utils/imageProcessor";
import ImageWithSkeleton from "../ui/ImageWithSkeleton";
import { useTranslation } from "react-i18next";

export default function EventCardCompact({
  title,
  description,
  img,
  date,
  setShowDetailsModal,
  setSelectedData,
  ...props
}) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const processedImg = processImage(img);
  const processedDate = processDate(date, i18n.language);

  return (
    <div {...props} className="w-8/9 md:w-94">
      <div
        className="event-card bg-crema border border-ochre/70 rounded-lg w-full h-full max-h-120 m-auto p-2 md:p-3 shadow-xl cursor-pointer hover:scale-101 transition-all"
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
        <div className="bg-ochre p-1 md:p-2 rounded-lg relative">
          <div className="absolute z-10 right-5 bottom-8 text-sm md:text-md rounded-sm bg-cielo/80 py-1 px-3 transition-transform duration-200 ease-out transform-gpu will-change-transform hover:scale-[1.02]">
            {processedDate}
          </div>
          <ImageWithSkeleton
            src={processedImg}
            width={800}
            height={400}
            alt="eventCardImg"
            className="rounded-lg h-58 w-full md:h-68 md:w-96 object-cover transition-transform duration-300"
          />
        </div>
        <h1 className="mt-2 text-md md:text-xl text-center font-black text-ochre-500">{title}</h1>
        <p className="line-clamp-3 mt-1 text-sm md:text-md text-ochre-500">
          {description?.[0]?.children?.[0]?.text || t("serviceMessages.descriptionUnavailable")}
        </p>
      </div>
    </div>
  );
}
