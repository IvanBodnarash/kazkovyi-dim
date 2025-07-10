import Image from "next/image";

const imgUrl =
  "https://www.dogseechew.in/storage/editor_61ef6aa53fc7d-joe-caione-qo-pif84vxg-unsplash-min.jpg";

export default function EventDetails({ data, onClose }) {
  console.log(data);
  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm"
      onClick={() => onClose()}
    >
      <div className="flex justify-center items-center shadow-lg w-full m-auto p-6 h-full">
        <div className="bg-crema flex flex-col md:flex-row gap-2 md:gap-6 rounded-2xl m-5 md:m-10 lg:m-20 xl:m-50 p-6 shadow-xl transition-all">
          <div className="bg-ochre p-2 rounded-xl h-50 w-70 lg:w-100 lg:h-100 overflow-hidden">
            <img
              className="rounded-xl h-full w-full object-cover"
              src={data.img}
              alt="placeholder"
            />
          </div>
          <div className="w-full md:w-3/4">
            <h1 className="text-slate-900 text-md md:text-lg lg:text-xl">{data.title}</h1>
            <p className="text-amber-950 text-sm md:text-md lg:text-lg">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
