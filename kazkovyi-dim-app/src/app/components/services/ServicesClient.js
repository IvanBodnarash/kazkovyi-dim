"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import ServiceCard from "../cards/ServiceCard";
import ServicesDetails from "../ui/ServicesDetails";
import { useTranslation } from "react-i18next";
import useScreenSize from "@/app/hooks/useScreenSize";
import { useRouter } from "next/navigation";

export default function ServicesClient({ services }) {
  const { t } = useTranslation();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const visibleMobileServices = showAllMobile ? services : services.slice(0, 3);

  const screenSize = useScreenSize();

  const router = useRouter();

  const handleServicesButton = () => {
    if (showAllMobile) {
      setShowAllMobile(false);
      router.push("/#services");
    } else {
      setShowAllMobile(true);
    }
  };

  useDisableBodyScroll(showDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            {t("categories.services")}
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center mt-8 gap-6">
            {screenSize === "desktop" ? (
              <>
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
              </>
            ) : (
              <>
                {visibleMobileServices.map((service, index) => (
                  <ServiceCard
                    key={service._id}
                    data-aos="fade-up"
                    title={service.title}
                    img={service.image}
                    shortDescription={service.shortDescription}
                    description={service.description}
                    gallery={service.gallery}
                    setShowDetailsModal={setShowDetailsModal}
                    setSelectedData={setSelectedData}
                  />
                ))}
              </>
            )}
          </div>
          {screenSize !== "desktop" && services.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleServicesButton}
                className="font-calibri text-white border border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-ochre-500 transition-colors"
              >
                {showAllMobile ? t("buttons.showLessButton") : t("buttons.viewAllButton")}
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showDetailsModal && <ServicesDetails data={selectedData} onClose={() => setShowDetailsModal(false)} />}
      </AnimatePresence>
    </>
  );
}
