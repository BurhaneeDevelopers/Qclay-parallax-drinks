"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);

  const handleNextClick = () => {
    setActiveCard((prevCard) => (prevCard + 1) % images.length);
  };
  const images = ["/drink-1.png", "/drink-2.png", "/drink-3.png", "/drink-4.png"];
  return (
    <div className="h-screen flex justify-center items-center relative bg-black overflow-hidden">
      <AnimatePresence mode="awa">
        <motion.div
          key={activeCard}
          className="rounded-3xl w-full h-[40rem] bg-contain bg-center bg-no-repeat flex justify-center items-center absolute"
          style={{
            backgroundImage: `url(${images[activeCard]})`,
          }}
          initial={{ opacity: 0, x: "100%", scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: "-100%", scale: 0.4 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="flex flex-row md:flex-col gap-5 md:gap-0 justify-center items-center md:space-y-10 absolute bottom-14 md:bottom-auto  md:right-36">
        {images.map((_, index) => (
          <button
            key={index}
            className={`bg-gray-200 w-10 h-10 md:w-24 md:h-24 rounded-full ${
              activeCard === index ? "bg-gray-500" : ""
            }`}
            onClick={() => setActiveCard(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-gray-200 w-10 h-10 md:w-24 md:h-24 rounded-full"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}
