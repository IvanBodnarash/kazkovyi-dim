import processImage from "@/app/utils/imageProcessor";

export default function CharCard({
  title,
  description,
  img,
  setShowCharsDetailsModal,
  setSelectedData,
  ...props
}) {
  const processedImg = processImage(img);

  return (
    <div {...props}>
      <div
        className="bg-crema rounded-2xl max-w-58 p-4 shadow-xl cursor-pointer hover:scale-105 transition-all"
        onClick={() => {
          setSelectedData({
            title,
            description,
            img,
          });
          setShowCharsDetailsModal(true);
        }}
      >
        <div className="bg-ochre p-3 rounded-xl relative">
          <img
            className="rounded-xl size-48 object-cover"
            src={processedImg}
            alt="placeholder"
          />
        </div>
        <h1 className="mt-2 text-xl text-center font-black text-ochre-500 truncate">
          {title}
        </h1>
      </div>
    </div>
  );
}
