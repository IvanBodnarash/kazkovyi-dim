"use client";

import EventCard from "../cards/EventCard";
import { useState } from "react";
import EventDetails from "../ui/EventDetails";
import { motion, AnimatePresence } from "motion/react";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import useAos from "@/app/hooks/useAos";

export default function EventsClient({ events }) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  // useDisableBodyScroll(showDetailsModal);
  useAos();

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            Наші події та новинки
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
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EventDetails
              data={selectedData}
              onClose={() => setShowDetailsModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
