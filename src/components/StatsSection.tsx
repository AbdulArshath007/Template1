import { motion } from 'motion/react';

const stats = [
  { label: "Patient Satisfaction", value: "98%", sub: "High Success Rate" },
  { label: "Expert Dentists", value: "15+", sub: "Board Certified" },
  { label: "Beautiful Smiles", value: "12K+", sub: "Crafted with Care" },
  { label: "Response Time", value: "< 24h", sub: "Fast Consultation" },
];

export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-20 px-6 max-w-7xl mx-auto border-b border-gray-200/50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <span className="text-3xl md:text-5xl font-limelight text-[#1E325A] mb-2 group-hover:text-[#D4AF37] transition-colors">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {stat.label}
            </span>
            <span className="text-[10px] text-gray-400 font-normal">
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
