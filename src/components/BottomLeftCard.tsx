import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function BottomLeftCard() {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-32 sm:bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-1.5 lg:gap-3 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit border border-white/20"
      id="bottom-left-card"
    >
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight leading-none">12K+</span>
        <span className="text-[8px] sm:text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider mt-1">Perfect Smiles Created</span>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white/80 rounded-full pl-1.5 pr-3 sm:pr-5 py-1 gap-1.5 sm:gap-2 hover:bg-white transition-colors self-start group"
        id="join-discord-btn"
      >
        <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[rgba(30,50,90,0.9)]" />
        </div>
        <span className="text-[10px] sm:text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Testimonials</span>
      </motion.button>
    </motion.div>
  );
}
