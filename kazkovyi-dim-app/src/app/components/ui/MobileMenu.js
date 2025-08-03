import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({ mobileMenuOpened, handleopenMobileMenu }) {
  return (
    <AnimatePresence>
      {mobileMenuOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm"
          onClick={handleopenMobileMenu}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Global">
              <button
                onClick={handleopenMobileMenu}
                className="cursor-pointer absolute right-4 top-[22px] rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <IoClose style={{ fontSize: "22px" }} />
              </button>
              <ul
                onClick={() => handleopenMobileMenu(false)}
                className="flex flex-col items-start mt-12 gap-6 text-lg"
              >
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Головна{" "}
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#events"
                  >
                    {" "}
                    Події{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#aboutUs"
                  >
                    {" "}
                    Про нас{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#chars"
                  >
                    {" "}
                    Персонажі{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#reviews"
                  >
                    {" "}
                    Відгуки{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#services"
                  >
                    {" "}
                    Пакети послуг{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Керування{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
