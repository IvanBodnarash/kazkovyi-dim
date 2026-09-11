"use client";

import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";
import CharCard from "../cards/CharCard";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import CharactersDetails from "../ui/CharactersDetails";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useScreenSize from "@/app/hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function CharactersClient({ chars }) {
  const { t } = useTranslation();
  const [showCharsDetailsModal, setShowCharsDetailsModal] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const [currentPortion, setCurrentPortion] = useState(0);

  const screenSize = useScreenSize();

  const router = useRouter();

  const itemsPerPage = screenSize === "tablet" ? 6 : 8;
  const totalPages = Math.ceil(chars.length / itemsPerPage);

  const nextPortion = () => setCurrentPortion((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  const prevPortion = () => setCurrentPortion((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));

  const startIndex = currentPortion * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCharacters = chars.slice(startIndex, endIndex);
  const visibleMobileCharacters = showAllMobile ? chars : chars.slice(0, 6);

  const isPaginated = screenSize === "tablet" || screenSize === "desktop";

  const handleCharsButton = () => {
    if (showAllMobile) {
      setShowAllMobile(false);
      router.push("/#chars");
    } else {
      setShowAllMobile(true);
    }
  };

  useDisableBodyScroll(showCharsDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-14 items-center font-calibri relative">
          <h1
            data-aos="fade-up"
            className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white"
          >
            {t("categories.characters")}
          </h1>
          <div className="relative mt-8">
            {isPaginated && totalPages > 1 && (
              <button
                onClick={prevPortion}
                aria-label="Previous characters"
                className="
                  absolute
                  z-10
                  left-0
                  top-1/2
                  -translate-y-1/2
                  text-white
                  text-4xl lg:text-5xl
                  cursor-pointer
                "
              >
                <IoIosArrowDropleft />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPortion}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="
                  flex flex-wrap
                  justify-around md:justify-center
                  gap-2 sm:gap-3 md:gap-8
                  md:px-10 lg:px-14
                "
              >
                {isPaginated ? (
                  <>
                    {visibleCharacters.map((item, index) => (
                      <CharCard
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        key={item._id ?? index}
                        title={item.title}
                        description={item.description}
                        img={item.image}
                        setShowCharsDetailsModal={setShowCharsDetailsModal}
                        setSelectedData={setSelectedData}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {visibleMobileCharacters.map((item, index) => (
                      <CharCard
                        key={item._id ?? index}
                        title={item.title}
                        description={item.description}
                        img={item.image}
                        setShowCharsDetailsModal={setShowCharsDetailsModal}
                        setSelectedData={setSelectedData}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {isPaginated && totalPages > 1 && (
              <button
                onClick={nextPortion}
                aria-label="Next characters"
                className="
                  absolute
                  z-10
                  right-0
                  top-1/2
                  -translate-y-1/2
                  text-white
                  text-4xl lg:text-5xl
                  cursor-pointer
                "
              >
                <IoIosArrowDropright />
              </button>
            )}
          </div>
          {screenSize === "mobile" && chars.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleCharsButton}
                className="font-calibri text-white border border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-ochre-500 transition-colors"
              >
                {showAllMobile ? t("buttons.showLessButton") : t("buttons.viewAllButton")}
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showCharsDetailsModal && (
          <CharactersDetails data={selectedData} onClose={() => setShowCharsDetailsModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
