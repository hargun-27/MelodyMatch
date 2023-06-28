import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card, { Song } from "./Card";

interface CarouselProps {
  songs: Song[];
}

const Carousel: React.FC<CarouselProps> = ({ songs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [songs.length]);

  return (
    <div className="relative w-[500px] h-[400px]">
      <AnimatePresence initial={false} custom={currentIndex}>
        {songs.map((song, index) => {
          const position = (index - currentIndex + songs.length) % songs.length;
          const x = (position - Math.floor(songs.length / 2)) * -(30 + Math.pow(1.2, -Math.abs(position)) * 40);
          
          // Calculate opacity based on position
          const opacity = position === 0 ? 1 : 0.5;
          
          // Calculate scale based on position
          const scale = Math.pow(1.3, -Math.abs(position));

          // Calculate z-index based on position
          const zIndex = songs.length - position;
          
          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0"
              initial={{ x: -60, opacity, scale }} // Initial animation properties when the song enters
              animate={{ x, opacity: 1, scale }} // Animation properties during the presence of the song
              exit={{ x: 60, opacity, scale }} // Animation properties when the song exits
              transition={{ duration: 0.5 }} // Animation duration
              custom={currentIndex} // Custom prop to track changes in the currentIndex state
              style={{ zIndex }} // Apply calculated z-index to control stacking order
            >
              <Card song={song} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
