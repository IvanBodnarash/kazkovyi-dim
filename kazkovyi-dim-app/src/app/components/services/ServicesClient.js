"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import ServiceCard from "../cards/ServiceCard";
import ServicesDetails from "../ui/ServicesDetails";
import { useTranslation } from "react-i18next";

export default function ServicesClient({ services }) {
  const { t } = useTranslation();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  useDisableBodyScroll(showDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            {t("categories.services")}
          </h1>
          <div className="flex flex-wrap justify-between mt-8 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                title={service.title}
                img={service.image}
                shortDescription={service.shortDescription}
                description={service.description}
                gallery={service.gallery}
                setShowDetailsModal={setShowDetailsModal}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetailsModal && <ServicesDetails data={selectedData} onClose={() => setShowDetailsModal(false)} />}
      </AnimatePresence>
    </>
  );
}
