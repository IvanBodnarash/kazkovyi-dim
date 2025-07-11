import processImage from "@/app/utils/imageProcessor";

export default function EventCard({
  title,
  description,
  img,
  setShowDetailsModal,
  setSelectedData,
}) {
  const processedImg = processImage(img);

  return (
    <div
      className="bg-crema rounded-2xl w-96 p-6 shadow-xl cursor-pointer hover:scale-105 transition-all"
      onClick={() => {
        setSelectedData({
          title,
          description,
          img,
        });
        setShowDetailsModal(true);
      }}
    >
      <div className="bg-ochre p-2 rounded-xl">
        <img className="rounded-xl h-80 w-96 object-cover" src={processedImg} alt="placeholder" />
      </div>
      <h1 className="mt-2 text-2xl font-black text-amber-900">{title}</h1>
      <p className="line-clamp-3 mt-1 text-amber-950">
        {description?.[0]?.children?.[0]?.text || "Опис не доступний"}
      </p>
    </div>
  );
}
