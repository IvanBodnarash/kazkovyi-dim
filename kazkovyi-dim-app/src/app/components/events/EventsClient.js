"use client";

import EventCard from "../cards/EventCard";
import { useState } from "react";
import EventDetails from "../ui/EventDetails";
import { useTranslation } from "react-i18next";

export default function EventsClient({ events }) {
  const { t } = useTranslation();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            {t("categories.events")}
          </h1>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                title={event.title}
                description={event.description}
                img={event.image}
                date={event.publishedAt}
                setShowDetailsModal={setShowDetailsModal}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>
        </div>
      </div>
      {showDetailsModal && <EventDetails data={selectedData} onClose={() => setShowDetailsModal(false)} />}
    </>
  );
}
