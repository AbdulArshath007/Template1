import { motion } from 'motion/react';

export default function VideoCard() {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full aspect-[4/5] sm:aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-none bg-[#f8f8f8]"
      >
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#f0f0f0] via-transparent to-[#f0f0f0]/10" />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[0.95] group-hover:scale-105 transition-transform duration-[3s] ease-out"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between p-8 md:p-16 text-center md:text-left gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[1.75rem] md:text-5xl lg:text-6xl font-limelight text-white mb-4 leading-[1.1] drop-shadow-md"
            >
              Transforming standard care <br className="hidden md:block" />into aesthetic excellence.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-xs md:text-base max-w-md font-medium mx-auto md:mx-0"
            >
              Join the elite patients experiencing the next generation of painless, high-precision dentistry.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 md:px-8 md:py-4 bg-white text-[#1E325A] rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#D4AF37] hover:text-white transition-all shadow-xl group">
              <span>Start Journey</span>
              <div className="w-5 h-5 rounded-full bg-[#1E325A]/10 flex items-center justify-center group-hover:bg-white/20">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10"/></svg>
              </div>
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1E325A] transition-all">
              Our Philosophy
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
