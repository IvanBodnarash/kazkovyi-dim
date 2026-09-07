"use client";

import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import { CgUserlane } from "react-icons/cg";

import ModalPortal from "./ModalPortal";
import { portableTextNormalizer } from "@/app/utils/portableTextHelper";
import useDisableBodyScroll from "@/app/hooks/useDisableBodyScroll";

export default function ReviewDetails({ data, onClose }) {
  useDisableBodyScroll(data);

  return (
    <ModalPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/40 backdrop-blur-sm
          p-5
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full max-w-2xl
            rounded-tl-3xl rounded-r-3xl
            bg-linear-to-tr from-white to-sky-100
            p-6 md:p-8
            shadow-2xl
          "
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="
              absolute
              right-4 top-4
              cursor-pointer
              text-slate-500
              transition-colors
              hover:text-ochre
            "
          >
            <IoClose size={26} />
          </button>

          <div className="flex items-center gap-3 mb-5 pr-8">
            <CgUserlane
              className="
                shrink-0
                text-white text-5xl
                bg-slate-600
                rounded-full
                p-2
              "
            />

            <h1 className="text-xl md:text-2xl font-bold text-ochre">{data.name}</h1>
          </div>

          <div className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
            <PortableText
              value={data.review}
              components={{
                block: portableTextNormalizer,
                marks: {
                  link: ({ value, children }) => {
                    const target = value?.href?.startsWith("http") ? "_blank" : undefined;

                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
                        className="underline hover:text-slate-500 transition-colors"
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </ModalPortal>
  );
}
