import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionProps {
  isTransitioning: boolean;
  origin: { x: number, y: number };
}

export default function PageTransition({ isTransitioning, origin }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ clipPath: `circle(0% at ${origin.x}px ${origin.y}px)` }}
          animate={{ clipPath: `circle(150% at ${origin.x}px ${origin.y}px)` }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1] 
          }}
          className="fixed inset-0 z-[150] bg-[#D4AF37] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
