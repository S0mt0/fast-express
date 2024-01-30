"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = ({ interval = 11500 }: { interval?: number }) => {
  const slideImages = ["/images/slider_1.jpg", "/images/slider_2.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slideImages.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [slideImages.length, interval]);

  return (
    <section
      className="h-screen bg-slate-300 bg-center bg-cover bg-no-repeat relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg_02.jpg')",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={slideImages[currentImage]}
          alt={`Image ${currentImage}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            type: "spring",
            ease: "circInOut",
            duration: 1.5,
            damping: 55,
          }}
          className="absolute inset-0 h-full object-cover object-center md:object-left"
        />
        <div
          className={cn(
            "absolute inset-0 h-full z-20 font-title flex flex-col justify-center p-6 sm:p-8 md:p-14",
            currentImage == 0 ? "items-start" : "items-end"
          )}
          key="text"
        >
          <div
            className={cn(
              "text-3xl md:text-4xl xl:text-6xl text-white font-bold leading-tight w-11/12 sm:max-w-[720px] sm:mt-48",
              currentImage === 0 ? "text-start" : "text-end"
            )}
          >
            <motion.span
              className="text-stone-200 font-medium text-lg md:text-xl xl:text-3xl block"
              initial={{ opacity: 0, x: currentImage === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              FAST DELIVERY
              <br />
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: currentImage === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              FAST EXPRESS COURIER IS WORLD WIDE TRANSPORT SERVICE
            </motion.span>
          </div>
        </div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
