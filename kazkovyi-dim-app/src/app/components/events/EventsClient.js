"use client";

import EventCard from "../cards/EventCard";
import { useState } from "react";
import EventDetails from "../ui/EventDetails";
import { useTranslation } from "react-i18next";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import Link from "next/link";

export default function EventsClient({ events }) {
  const { t } = useTranslation();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  useDisableBodyScroll(showDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-14 items-center font-calibri">
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
                data-aos-once="true"
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
          <div className="flex justify-center mt-4 md:mt-6">
            <button
              href="/events"
              className="font-calibri text-lg md:text-xl cursor-pointer rounded-lg bg-crema text-ochre-500 hover:bg-ochre hover:text-white transition-all active:bg-ochre-500 px-8 md:px-12 py-1.5 md:py-2.5 font-medium shadow-sm"
              type="button"
            >
              <Link href="/events">{t("buttons.allEventsButton")}</Link>
            </button>
          </div>
        </div>
      </div>
      {showDetailsModal && <EventDetails data={selectedData} onClose={() => setShowDetailsModal(false)} />}
    </>
  );
}
