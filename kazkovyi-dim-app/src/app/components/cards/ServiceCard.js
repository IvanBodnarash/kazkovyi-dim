import processImage from "@/app/utils/imageProcessor";

export default function ServiceCard({
  title,
  img,
  duration,
  price,
  servicesList,
  setShowDetailsModal,
  setSelectedData,
  ...props
}) {
  const processedImg = processImage(img);

  console.log(servicesList);

  return (
    <div {...props}>
      <div
        className="bg-crema rounded-2xl w-100 p-6 shadow-xl cursor-pointer hover:scale-105 transition-all"
        onClick={() => {
          setSelectedData({
            title,
            duration,
            price,
            servicesList,
          });
          setShowDetailsModal(true);
        }}
      >
        <h1 className="mb-4 text-2xl font-black text-center text-ochre-500">
          {title}
        </h1>
        <div className="bg-ochre p-3 rounded-xl relative">
          <img
            className="rounded-xl h-80 w-96 object-cover"
            src={processedImg}
            alt="placeholder"
          />
        </div>
        <div className="mt-4 text-xl">
          <p className="text-ochre-500">Тривалість: {duration}</p>
          <p className="text-ochre-500">Вартість: {price}</p>
        </div>
      </div>
    </div>
  );
}
