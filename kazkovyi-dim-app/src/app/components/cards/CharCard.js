import processImage from "@/app/utils/imageProcessor";
import Image from "next/image";

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
        className="bg-crema border border-ochre/70 rounded-2xl max-w-58 p-4 shadow-xl cursor-pointer hover:scale-105 transition-all"
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
          <Image
            src={processedImg}
            width={800}
            height={400}
            alt="placeholder"
            className="rounded-xl size-48 object-cover"
          />
        </div>
        <h1 className="mt-2 text-xl text-center font-black text-ochre-500 truncate">
          {title}
        </h1>
      </div>
    </div>
  );
}
