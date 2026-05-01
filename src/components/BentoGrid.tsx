import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-[1.8rem] md:text-5xl font-limelight text-[#1E325A] leading-tight mb-3 md:mb-4">
            Architected for <br className="hidden md:block" />Aesthetic Perfection
          </h2>
          <p className="text-gray-500 text-xs md:text-base max-w-lg mx-auto md:mx-0">
            Precision dentistry meets artistic vision. We utilize high-precision technologies to ensure your comfort and health.
          </p>
        </div>
        <button className="px-5 py-2.5 md:px-6 md:py-3 bg-[#1E325A] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] transition-all self-center md:self-start">
          Explore Services
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
        {/* Card 1: Large Vertical */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-2 md:col-span-4 md:row-span-2 bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-md transition-shadow min-h-[340px] md:min-h-[600px]"
        >
          <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.08] group-hover:opacity-15 transition-opacity">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" 
              alt="Digital Diagnostics"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>
          <div className="relative z-10">
            <span className="text-[9px] md:text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-3 md:mb-4 block">01 / Specialist</span>
            <h3 className="text-xl md:text-3xl font-limelight text-[#1E325A] mb-3 md:mb-4 leading-tight">Advanced <br />Digital Diagnostics</h3>
          </div>
          <div className="relative z-10">
            <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed mb-4 md:mb-8">
              3D scanning and computer-aided design for precision beyond the naked eye.
            </p>
            <div className="flex items-center gap-2 text-[#1E325A] font-bold text-[10px] uppercase tracking-widest cursor-pointer group/link">
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Top Wide */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-2 md:col-span-8 bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-5 md:gap-8 items-center group relative overflow-hidden shadow-sm hover:shadow-md transition-shadow md:min-h-[280px]"
        >
          <div className="flex-1 relative z-10">
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-3 md:mb-4 block">02 / Experience</span>
            <h3 className="text-xl md:text-3xl font-limelight text-[#1E325A] mb-3 md:mb-4">Painless Dental Journeys</h3>
            <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed">
              Experience zero friction with our modern sedation techniques and holistic comfort-first philosophy.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-[#f8f8f8] rounded-[1.2rem] md:rounded-[2rem] flex items-center justify-center border border-gray-100 group-hover:bg-white transition-colors relative overflow-hidden group/img shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" 
              alt="Comfort"
              className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-lg md:text-2xl font-limelight text-[#D4AF37] bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/50">Comfort</div>
          </div>
        </motion.div>

        {/* Card 3: Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-4 bg-white rounded-[1.5rem] p-6 md:p-10 border border-gray-100 flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-md transition-shadow h-[200px] md:h-auto md:min-h-[296px]"
        >
          <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-217359f49f4c?auto=format&fit=crop&q=80&w=400" 
              alt="Materials"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 md:mb-4 block">03 / Security</span>
            <h3 className="text-sm md:text-xl font-limelight text-[#1E325A] mb-1 md:mb-3">Bio-Compatible <br />Materials</h3>
            <p className="hidden md:block text-gray-500 text-xs leading-relaxed max-w-[180px]">
              Only the highest quality, non-toxic materials for your long-term health.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-end">
            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#D4AF37] transition-colors" />
          </div>
        </motion.div>

        {/* Card 4: Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-4 bg-[#1E325A] rounded-[1.5rem] p-6 md:p-10 text-white flex flex-col justify-between group h-[200px] md:h-auto md:min-h-[296px]"
        >
          <div>
            <span className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-2 md:mb-4 block">04 / Global</span>
            <h3 className="text-sm md:text-xl font-limelight text-white mb-1 md:mb-3">International <br />Standards</h3>
            <p className="hidden md:block text-white/50 text-xs leading-relaxed max-w-[180px]">
              Adhering to strict FDA and international dental safety protocols globally.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
