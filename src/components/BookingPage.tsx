import { motion } from 'motion/react';
import { X, Calendar, User, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { useState, FormEvent, MouseEvent, ChangeEvent } from 'react';

interface BookingPageProps {
  onBack: (x: number, y: number) => void;
}

export default function BookingPage({ onBack }: BookingPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Please enter a valid email address';
        break;
      case 'phone':
        const phoneRegex = /^(\+91[\s-]?)?[6789]\d{9}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) error = 'Please enter a valid 10-digit phone number';
        break;
      case 'date':
        if (!value) {
          error = 'Please select a date';
        } else {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selectedDate < today) error = 'Appointment date cannot be in the past';
        }
        break;
      case 'time':
        if (!value) error = 'Please select a time';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const isFormValid = 
    Object.values(errors).every(error => error === '') && 
    Object.values(formData).every(value => value !== '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert('Thank you! Your appointment request has been sent.');
    onBack(window.innerWidth / 2, window.innerHeight / 2);
  };

  const handleBack = (e: MouseEvent) => {
    onBack(e.clientX, e.clientY);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col items-center justify-center p-3 md:p-10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-[#1E325A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-4xl bg-white/70 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-2xl overflow-hidden border border-white"
        id="booking-page-container"
      >
        <button 
          onClick={handleBack}
          className="absolute top-6 left-6 md:top-8 md:left-8 p-2 md:p-3 hover:bg-white/50 rounded-full transition-colors flex items-center gap-2 group z-20"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium text-gray-500">Back</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-8 md:pt-0">
          {/* Left Side: Branding */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-limelight text-[#D4AF37] leading-tight">
              Begin Your <br className="hidden md:block" />Transformation
            </h1>
            <p className="text-sm md:text-base text-gray-500 max-w-sm leading-relaxed">
              Step into a world of clinical excellence. Schedule your consultation today and discover the path to your most confident smile.
            </p>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 pt-2 md:pt-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                </div>
                <span className="text-xs md:text-sm font-medium">+91 8072334464</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                </div>
                <span className="text-xs md:text-sm font-medium">Available Mon — Sat</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 bg-white/50 p-5 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white">
            <div className="space-y-1">
              <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Patient Name</label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.name ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                <input 
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3 md:py-3.5 pl-12 pr-4 text-sm md:text-base outline-none transition-all shadow-sm ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.name}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1">
                <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.email ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                  <input 
                    required
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3 md:py-3.5 pl-12 pr-4 text-sm md:text-base outline-none transition-all shadow-sm ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.email}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.phone ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                  <input 
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91 8072334464"
                    className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3 md:py-3.5 pl-12 pr-4 text-sm md:text-base outline-none transition-all shadow-sm ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.phone}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1">
                <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Date</label>
                <div className="relative">
                  <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.date ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                  <input 
                    required
                    name="date"
                    type="date"
                    className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3 md:py-3.5 pl-12 pr-4 text-sm md:text-base outline-none transition-all shadow-sm ${errors.date ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                {errors.date && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.date}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Time</label>
                <div className="relative">
                  <Clock className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.time ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                  <select 
                    required
                    name="time"
                    className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3 md:py-3.5 pl-12 pr-4 text-sm md:text-base outline-none transition-all appearance-none shadow-sm ${errors.time ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
                {errors.time && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.time}</span>}
              </div>
            </div>

            <motion.button 
              whileHover={isFormValid ? { scale: 1.02 } : {}}
              whileTap={isFormValid ? { scale: 0.98 } : {}}
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-xl md:rounded-2xl mt-2 md:mt-4 font-semibold transition-all shadow-xl tracking-wide uppercase text-xs ${
                isFormValid 
                  ? 'bg-[#D4AF37] text-white hover:bg-[#C5A059] shadow-[#D4AF37]/20 cursor-pointer' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              Book My Consultation
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
