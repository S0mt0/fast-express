"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = ({ interval = 10000 }: { interval?: number }) => {
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
        position: "relative",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={slideImages[currentImage]}
          alt={`Image ${currentImage}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            type: "spring",
            ease: "circInOut",
            duration: 1,
            damping: 30,
          }}
          className="absolute inset-0 h-full object-cover object-center"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
