import { motion } from 'motion/react';
import { X, Calendar, User, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { useState, FormEvent, MouseEvent, ChangeEvent } from 'react';
import CalendarPicker from './CalendarPicker';

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

  const handleDateSelect = (date: string) => {
    setFormData(prev => ({ ...prev, date }));
    validateField('date', date);
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

      {/* Back Button - Top Left of Page */}
      <button 
        onClick={handleBack}
        className="fixed top-4 left-4 md:top-10 md:left-10 p-2.5 md:p-4 bg-white/60 backdrop-blur-md hover:bg-white shadow-xl rounded-full transition-all flex items-center gap-1 md:gap-2 group z-50 border border-white"
        id="booking-back-btn"
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] md:text-sm font-bold text-[#D4AF37] uppercase tracking-wider pr-1 md:pr-2 hidden sm:inline">Back</span>
      </button>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-6xl bg-white/70 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh] md:max-h-[95vh] border border-white scrollbar-hide mt-12 md:mt-0"
        id="booking-page-container"
      >
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start pt-4 sm:pt-0">
          {/* Left Side: Branding */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-0">
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

            <div className="hidden lg:block pt-8">
              <div className="p-6 bg-[#D4AF37]/5 rounded-[2rem] border border-[#D4AF37]/10">
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-2">Our Quality Guarantee</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Every consultation is handled by board-certified specialists using state-of-the-art diagnostic imaging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="space-y-4">
              <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Select Consultation Date</label>
              <CalendarPicker 
                selectedDate={formData.date} 
                onSelect={handleDateSelect} 
                error={errors.date}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Preferred Time</label>
              <div className="relative">
                <Clock className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${errors.time ? 'text-red-500' : 'text-[#D4AF37]'}`} />
                <select 
                  required
                  name="time"
                  className={`w-full bg-white/80 border rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm md:text-base outline-none transition-all appearance-none shadow-sm ${errors.time ? 'border-red-500 focus:ring-red-500/20' : 'border-transparent focus:ring-[#D4AF37]/20 focus:border-[#D4AF37]/20'}`}
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
              {errors.time && <span className="text-[10px] text-red-500 ml-1 font-medium">{errors.time}</span>}
            </div>

            <motion.button 
              whileHover={isFormValid ? { scale: 1.01 } : {}}
              whileTap={isFormValid ? { scale: 0.99 } : {}}
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold transition-all shadow-xl tracking-wide uppercase text-sm ${
                isFormValid 
                  ? 'bg-[#D4AF37] text-white hover:bg-[#C5A059] shadow-[#D4AF37]/20 cursor-pointer' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              Confirm Booking
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
