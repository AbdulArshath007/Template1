import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { MouseEvent } from 'react';

interface NavbarProps {
  onBookClick: (e: MouseEvent) => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10" id="navbar">
      {/* Left Side (spacer) */}
      <div className="flex-1 hidden md:block" />
      
      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Home
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Services
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          About Us
        </li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
          Patient Care
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </li>
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">LUMIERE</span>
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }}
          onClick={onBookClick}
          className="flex items-center bg-[#D4AF37] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[#C5A059] transition-colors group"
          id="book-demo-btn"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm font-normal">
            <span className="inline sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </span>
        </motion.button>
      </div>
    </nav>
  );
}
