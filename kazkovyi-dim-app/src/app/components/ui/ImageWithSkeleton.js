"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./Loader";

export default function ImageWithSkeleton({ src, alt, className = "", width, height }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-200/80 animate-pulse"
          >
            <div className="w-10 h-10">
              <Loader />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 0.3 }}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={className}
        />
      </motion.div>
    </div>
  );
}
