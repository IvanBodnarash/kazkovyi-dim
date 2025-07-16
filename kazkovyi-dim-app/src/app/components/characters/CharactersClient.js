"use client";

import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";
import CharCard from "../cards/CharCard";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";
import CharactersDetails from "../ui/CharactersDetails";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useScreenSize from "@/app/hooks/useScreenSize";

export default function CharactersClient({ chars }) {
  const [showCharsDetailsModal, setShowCharsDetailsModal] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const [currentPortion, setCurrentPortion] = useState(0);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(chars.length / itemsPerPage);

  const nextPortion = () =>
    setCurrentPortion((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  const prevPortion = () =>
    setCurrentPortion((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));

  const startIndex = currentPortion * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCharacters = chars.slice(startIndex, endIndex);

  const screenSize = useScreenSize();

  useDisableBodyScroll(showCharsDetailsModal);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-0 md:px-6 lg:px-8">
        <div className="mt-0 lg:mt-14 items-center font-calibri relative">
          <h1 className="text-2xl md:text-3xl text-center lg:text-start lg:text-4xl font-bold text-white">
            Наші персонажі
          </h1>
          <IoIosArrowDropleft
            className={`${screenSize === "desktop" ? "block" : "hidden"} absolute top-80 text-white text-5xl cursor-pointer`}
            onClick={prevPortion}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPortion}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center mt-8 gap-8"
            >
              {screenSize === "desktop" ? (
                <>
                  {visibleCharacters.map((item, index) => (
                    <CharCard
                      key={index}
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
                  {chars.map((item, index) => (
                    <CharCard
                      key={index}
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
          <IoIosArrowDropright
            className={`${screenSize === "desktop" ? "block" : "hidden"} absolute right-0 top-80 text-white text-5xl cursor-pointer`}
            onClick={nextPortion}
          />
        </div>
      </div>
      <AnimatePresence>
        {showCharsDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CharactersDetails
              data={selectedData}
              onClose={() => setShowCharsDetailsModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
