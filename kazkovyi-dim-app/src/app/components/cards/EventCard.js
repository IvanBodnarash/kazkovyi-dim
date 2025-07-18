import processDate from "@/app/utils/dateProcessor";
import processImage from "@/app/utils/imageProcessor";

export default function EventCard({
  title,
  description,
  img,
  date,
  setShowDetailsModal,
  setSelectedData,
  ...props
}) {
  const processedImg = processImage(img);
  const processedDate = processDate(date);

  return (
    <div {...props}>
      <div
        className="bg-crema rounded-2xl w-96 h-full p-6 shadow-xl cursor-pointer hover:scale-105 transition-all"
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
        <div className="bg-ochre p-3 rounded-xl relative">
          <div className="absolute right-5 bottom-8 rounded-sm bg-cielo p-1">
            {processedDate}
          </div>
          <img
            className="rounded-xl h-80 w-96 object-cover"
            src={processedImg}
            alt="placeholder"
          />
        </div>
        <h1 className="mt-2 text-2xl font-black text-ochre-500">{title}</h1>
        <p className="line-clamp-3 mt-1 text-ochre-500">
          {description?.[0]?.children?.[0]?.text || "Опис не доступний"}
        </p>
      </div>
    </div>
  );
}
