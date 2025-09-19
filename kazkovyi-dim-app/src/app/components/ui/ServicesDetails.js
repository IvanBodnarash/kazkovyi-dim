import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ModalPortal from "./ModalPortal";

export default function ServicesDetails({ data, onClose }) {
  return (
    <ModalPortal>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 bg-opacity-30 bg-black/40 backdrop-blur-sm m-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ willChange: "opacity" }}
          onClick={() => onClose()}
        >
          <motion.div
            className="flex justify-center items-center shadow-xrl p-1 lg:p-6 lg:h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="bg-crema border border-ochre/70 flex flex-col gap-2 lg:gap-6 rounded-2xl m-2 md:m-10 lg:m-15 xl:m-50 p-3 lg:p-6 shadow-xl transition-all">
              <div className="flex flex-row justify-between items-center text-ochre-500 text-xl lg:text-2xl font-bold">
                <h1 className="text-center">{data.title}</h1>
                <IoClose size={28} className="cursor-pointer" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 bg-[#C9B7B7] p-3 lg:p-5 rounded-2xl overflow-scroll md:overflow-hidden h-140 md:h-full">
                {data.servicesList.map((service, index) => (
                  <div key={index} className="flex flex-row gap-4 items-center">
                    <Image
                      src={service.imageUrl}
                      width={200}
                      height={200}
                      alt={service.title}
                      className="rounded-full size-15 lg:size-20 object-cover"
                    />
                    <p
                      key={service}
                      className="text-md lg:text-lg text-ochre-500"
                    >
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-lg lg:text-xl flex flex-col gap-2">
                <p className="text-ochre-500">Тривалість: {data.duration}</p>
                <p className="text-ochre-500">Вартість: {data.price}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </ModalPortal>
  );
}
