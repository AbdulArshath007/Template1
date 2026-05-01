import { motion } from 'motion/react';
import React, { MouseEvent } from 'react';
import Navbar from './Navbar';
import HeroBadge from './HeroBadge';
import BottomLeftCard from './BottomLeftCard';
import BottomRightCorner from './BottomRightCorner';

interface HeroProps {
  onBookClick: (x: number, y: number) => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const handleBookClick = (e: MouseEvent) => {
    onBookClick(e.clientX, e.clientY);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]" id="hero-wrapper">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group" id="hero-section">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source src="/Woman_smiling_in_slow_motion_.mp4" type="video/mp4" />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar onBookClick={handleBookClick} />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl z-10">
            <HeroBadge />
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[80px] font-limelight text-[#D4AF37] mb-3 tracking-tight leading-[1.1] md:leading-[1.05]"
              id="hero-title"
            >
              Radiant Smile, Perfect Care
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[0.75rem] sm:text-base md:text-lg text-[#5E6470] opacity-90 leading-relaxed max-w-xl font-normal px-6"
              id="hero-description"
            >
              Experience a new standard of dental excellence. From aesthetic perfection to holistic health, we craft smiles that shine.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner onBookClick={handleBookClick} />
        </div>
      </section>
    </div>
  );
}
