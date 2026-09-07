import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function MobileMenu({ mobileMenuOpened, closeMobileMenu }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {mobileMenuOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm"
          onClick={closeMobileMenu}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white border border-l-ochre/50 shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Global">
              <button
                onClick={closeMobileMenu}
                className="cursor-pointer absolute right-4 top-5.5 rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <IoClose style={{ fontSize: "22px" }} />
              </button>
              <ul className="flex flex-col items-start mt-12 gap-6 text-lg">
                <li>
                  <Link
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {t("header.home")}
                  </Link>
                </li>

                <li>
                  <a
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#events"
                  >
                    {t("header.events")}
                  </a>
                </li>

                <li>
                  <a
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#aboutUs"
                  >
                    {t("header.about")}
                  </a>
                </li>

                <li>
                  <a
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#chars"
                  >
                    {t("header.characters")}
                  </a>
                </li>

                <li>
                  <a
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#reviews"
                  >
                    {t("header.reviews")}
                  </a>
                </li>

                <li>
                  <a
                    onClick={closeMobileMenu}
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#services"
                  >
                    {t("header.services")}
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="https://kazkovyi-dim.sanity.studio/structure"
                  >
                    {t("header.adminButton")}
                  </a>
                </li>

                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
