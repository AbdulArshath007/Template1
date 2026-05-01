import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowUp, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f0f0f0] pt-12 pb-8 md:pt-20 md:pb-10 px-6 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-limelight text-[#D4AF37]">Radiant Dental</h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs">
              Providing world-class dental care with a touch of elegance and artistic precision.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1E325A] hover:bg-[#D4AF37] hover:text-white transition-all cursor-pointer">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:contents gap-6">
            <div>
              <h4 className="text-[10px] md:text-sm font-bold text-[#1E325A] uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2">
                {['Aesthetic', 'Implants', 'Braces', 'Surgery'].map((item) => (
                  <li key={item} className="text-gray-400 hover:text-[#D4AF37] text-[11px] md:text-sm transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-sm font-bold text-[#1E325A] uppercase tracking-widest mb-4">Clinic</h4>
              <ul className="space-y-2">
                {['About', 'Team', 'Cases', 'Privacy'].map((item) => (
                  <li key={item} className="text-gray-400 hover:text-[#D4AF37] text-[11px] md:text-sm transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] md:text-sm font-bold text-[#1E325A] uppercase tracking-widest">Connect</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MapPin size={12} />
                <span>Platinum District, NY</span>
              </div>
              <div className="flex items-center gap-2 text-[#1E325A] font-bold text-xs">
                <Phone size={12} />
                <span>+1 (555) RADIANT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200/50 gap-4 md:gap-6">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-medium text-center md:text-left">
            © 2026 RADIANT DENTAL.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <span className="text-[9px] font-bold text-[#1E325A] uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Scroll Up</span>
            <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all border border-gray-100">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
