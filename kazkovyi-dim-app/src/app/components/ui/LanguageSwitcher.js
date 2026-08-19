"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown } from "react-icons/io5";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: "es",
      label: "ES",
    },
    {
      code: "uk",
      label: "UA",
    },
    {
      code: "en",
      label: "EN",
    },
  ];

  const currentLanguage = languages.find((language) => language.code === i18n.resolvedLanguage) || languages[0];

  const handleChangeLanguage = async (language) => {
    await i18n.changeLanguage(language);

    window.localStorage.setItem("language", language);

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex items-center gap-1 rounded-md px-3 py-1 md:py-2.5 text-md font-medium text-gray-500 border lg:border-0 border-gray-500 hover:bg-gray-100 transition-all cursor-pointer"
      >
        {currentLanguage.label}

        <IoChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 min-w-20 overflow-hidden rounded-md bg-white shadow-lg border border-gray-200 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleChangeLanguage(language.code)}
              className={`block w-full px-4 py-2 text-left text-sm cursor-pointer text-gray-600 transition-colors hover:bg-gray-100 ${
                currentLanguage.code === language.code ? "font-semibold bg-gray-50" : ""
              }`}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
