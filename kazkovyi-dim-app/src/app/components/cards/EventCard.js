import Image from "next/image";

export default function EventCard({
  title,
  description,
  img,
  setShowDetailsModal,
  setSelectedData,
}) {
  return (
    <div
      className="bg-crema rounded-2xl w-86 p-6 shadow-xl cursor-pointer hover:scale-105 transition-all"
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
        <img className="rounded-xl w-96" src={img} alt="placeholder" />
      </div>
      <h1 className="mt-2 text-2xl font-black text-gray-600">{title}</h1>
      <p className="line-clamp-3 mt-1 text-amber-950">{description}</p>
    </div>
  );
}
