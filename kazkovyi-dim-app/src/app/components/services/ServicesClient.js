"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import ServiceCard from "../cards/ServiceCard";
import ServicesDetails from "../ui/ServicesDetails";

export default function ServicesClient({ services }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  useDisableBodyScroll(showDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri">
          <h1 className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white">
            Пакети Послуг
          </h1>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                img={service.image}
                duration={service.duration}
                price={service.price}
                servicesList={service.servicesList}
                setShowDetailsModal={setShowDetailsModal}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServicesDetails
              data={selectedData}
              onClose={() => setShowDetailsModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
