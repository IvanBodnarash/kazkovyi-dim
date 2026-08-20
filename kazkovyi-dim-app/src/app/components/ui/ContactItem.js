"use client";

import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactItem({ title, href, imageUrl, newTab }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <a
      className="p-4 hover:bg-slate-100 flex flex-row items-center gap-6"
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <div className="relative w-8 h-8 shrink-0">
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 rounded-full bg-gray-200 animate-pulse"
            />
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.3 }}>
          <Image src={imageUrl} alt={title} width={30} height={30} onLoad={() => setIsLoaded(true)} />
        </motion.div>
      </div>

      <div className="relative">
        {!isLoaded ? <span className="block w-24 h-4 rounded bg-gray-200 animate-pulse" /> : <span>{title}</span>}
      </div>
    </a>
  );
}
