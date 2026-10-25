"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = pathname.startsWith("/uk") ? "uk" : pathname.startsWith("/en") ? "en" : "es";

  const getPathForLanguage = (language) => {
    let pathWithoutLanguage = pathname;

    if (pathname.startsWith("/uk")) {
      pathWithoutLanguage = pathname.slice(3) || "/";
    }

    if (pathname.startsWith("/en")) {
      pathWithoutLanguage = pathname.slice(3) || "/";
    }

    if (language === "es") {
      return pathWithoutLanguage;
    }

    if (pathWithoutLanguage === "/") {
      return `/${language}`;
    }

    return `/${language}${pathWithoutLanguage}`;
  };

  const languages = [
    {
      code: "es",
      label: "ES",
      href: getPathForLanguage("es"),
    },
    {
      code: "uk",
      label: "UA",
      href: getPathForLanguage("uk"),
    },
    {
      code: "en",
      label: "EN",
      href: getPathForLanguage("en"),
    },
  ];

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
        {languages.find((lang) => lang.code === currentLanguage)?.label}

        <IoChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 min-w-20 overflow-hidden rounded-md bg-white shadow-lg border border-gray-200 z-50">
          {languages.map((language) => (
            <Link
              key={language.code}
              href={language.href}
              onClick={() => setIsOpen(false)}
              className={`block w-full px-4 py-2 text-left text-sm cursor-pointer text-gray-600 transition-colors hover:bg-gray-100 ${
                currentLanguage.code === language.code ? "font-semibold bg-gray-50" : ""
              }`}
            >
              {language.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
