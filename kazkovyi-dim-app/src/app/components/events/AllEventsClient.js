"use client";

import { useState } from "react";
import EventDetails from "../ui/EventDetails";
import { useTranslation } from "react-i18next";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import Link from "next/link";
import EventCardCompact from "../cards/EventCardCompact";

export default function AllEventsClient({ events, currentPage, totalPages }) {
  const { t } = useTranslation();

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  useDisableBodyScroll(showDetailsModal);

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const pageNumbers = getPageNumbers();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-14 items-center font-calibri">
          <h1
            data-aos="fade-zoom-in"
            data-aos-once="true"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            {t("categories.events")}
          </h1>

          <div className="flex flex-wrap justify-center mt-8 gap-4">
            {events.map((event) => (
              <EventCardCompact
                key={event._id}
                data-aos-once="true"
                title={event.title}
                description={event.description}
                img={event.image}
                date={event.publishedAt}
                setShowDetailsModal={setShowDetailsModal}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10">
              {/* Mobile */}
              <div className="flex md:hidden justify-center items-center gap-5">
                {currentPage > 1 ? (
                  <Link
                    href={`/events?page=${currentPage - 1}`}
                    aria-label={t("previous")}
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema
                      text-ochre-500
                      active:bg-ochre
                      active:text-white
                      transition-colors
                    "
                  >
                    ←
                  </Link>
                ) : (
                  <span
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema/40
                      text-ochre-500/40
                      cursor-not-allowed
                    "
                  >
                    ←
                  </span>
                )}

                <span className="text-white text-lg font-bold min-w-16 text-center">
                  {currentPage} / {totalPages}
                </span>

                {currentPage < totalPages ? (
                  <Link
                    href={`/events?page=${currentPage + 1}`}
                    aria-label={t("next")}
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema
                      text-ochre-500
                      active:bg-ochre
                      active:text-white
                      transition-colors
                    "
                  >
                    →
                  </Link>
                ) : (
                  <span
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema/40
                      text-ochre-500/40
                      cursor-not-allowed
                    "
                  >
                    →
                  </span>
                )}
              </div>

              {/* Desktop */}
              <div className="hidden md:flex justify-center items-center gap-2">
                {currentPage > 1 ? (
                  <Link
                    href={`/events?page=${currentPage - 1}`}
                    aria-label={t("previous")}
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema
                      text-ochre-500
                      hover:bg-ochre
                      hover:text-white
                      transition-colors
                    "
                  >
                    ←
                  </Link>
                ) : (
                  <span
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema/40
                      text-ochre-500/40
                      cursor-not-allowed
                    "
                  >
                    ←
                  </span>
                )}

                {pageNumbers.map((page, index) =>
                  page === "..." ? (
                    <span key={`ellipsis-${index}`} className="w-8 text-center text-white">
                      ...
                    </span>
                  ) : (
                    <Link
                      key={page}
                      href={`/events?page=${page}`}
                      className={`
                        flex items-center justify-center
                        w-10 h-10
                        rounded-full
                        transition-colors
                        ${
                          currentPage === page
                            ? "bg-ochre text-white"
                            : "bg-crema text-ochre-500 hover:bg-ochre hover:text-white"
                        }
                      `}
                    >
                      {page}
                    </Link>
                  ),
                )}

                {currentPage < totalPages ? (
                  <Link
                    href={`/events?page=${currentPage + 1}`}
                    aria-label={t("next")}
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema
                      text-ochre-500
                      hover:bg-ochre
                      hover:text-white
                      transition-colors
                    "
                  >
                    →
                  </Link>
                ) : (
                  <span
                    className="
                      flex items-center justify-center
                      w-10 h-10
                      rounded-full
                      bg-crema/40
                      text-ochre-500/40
                      cursor-not-allowed
                    "
                  >
                    →
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {showDetailsModal && <EventDetails data={selectedData} onClose={() => setShowDetailsModal(false)} />}
    </>
  );
}
