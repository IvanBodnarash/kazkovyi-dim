export default function ServicesDetails({ data, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm m-auto"
      onClick={() => onClose()}
    >
      <div className="flex justify-center items-center shadow-xrl p-1 lg:p-6 lg:h-full">
        <div className="bg-crema flex flex-col gap-2 lg:gap-6 rounded-2xl m-2 md:m-10 lg:m-15 xl:m-50 p-3 lg:p-6 shadow-xl transition-all">
          <h1 className="text-ochre-500 text-lg md:text-xl lg:text-2xl font-bold text-center">
            {data.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 bg-[#C9B7B7] p-3 lg:p-5 rounded-2xl overflow-scroll md:overflow-hidden h-120 md:h-full">
            {data.servicesList.map((service, index) => (
              <div key={index} className="flex flex-row gap-4 items-center">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="rounded-full size-15 lg:size-20 object-cover"
                />
                <p key={service} className="text-md lg:text-lg text-ochre-500">{service.title}</p>
              </div>
            ))}
          </div>
          <div className="text-lg lg:text-xl flex flex-col gap-2">
            <p className="text-ochre-500">Тривалість: {data.duration}</p>
            <p className="text-ochre-500">Вартість: {data.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
