"use client";

// import { motion, AnimatePresence } from "motion/react";
import { useContext, useState } from "react";
// import { IoClose } from "react-icons/io5";

import Image from "next/image";

import ConnectWithUsContext from "@/app/context/ConnectWithUsContext";
import ContactsPopup from "./ContactsPopup";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  // const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useContext(ConnectWithUsContext);

  function handleopenMobileMenu() {
    setMobileMenuOpened((prevState) => !prevState);
    console.log(mobileMenuOpened);
  }

  return (
    <header className="bg-white fixed w-full shadow-lg z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Головна</span>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12 transition-all">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Головна{" "}
                  </a>
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
                    href="#"
                  >
                    {" "}
                    Про нас{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
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
                    Контакти{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Відгуки{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-2">
                <button
                  className="cursor-pointer rounded-md bg-[#99a8b4] hover:bg-slate-500 transition-all active:bg-slate-600 px-5 py-2.5 text-md font-medium text-white shadow-sm"
                  type="button"
                  onClick={() => setIsPopupOpened((prevState) => !prevState)}
                >
                  Зв'язатися з нами
                </button>

                <ContactsPopup
                  isPopupOpened={isPopupOpened}
                  setIsPopupOpened={setIsPopupOpened}
                />

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-200 px-5 py-2.5 text-md font-medium text-[#666666]"
                    href="#"
                  >
                    Керування
                  </a>
                </div>
              </div>

              <div className="block lg:hidden">
                <button
                  onClick={handleopenMobileMenu}
                  className="cursor-pointer rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <MobileMenu
                mobileMenuOpened={mobileMenuOpened}
                handleopenMobileMenu={handleopenMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
