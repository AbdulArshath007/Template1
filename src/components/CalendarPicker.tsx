import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarPickerProps {
  selectedDate: string;
  onSelect: (date: string) => void;
  error?: string;
}

export default function CalendarPicker({ selectedDate, onSelect, error }: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const firstDay = firstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const days = [];

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-12" />);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const isSelected = dateString === selectedDate;
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();

      days.push(
        <motion.button
          key={day}
          whileHover={!isPast ? { scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)' } : {}}
          whileTap={!isPast ? { scale: 0.95 } : {}}
          disabled={isPast}
          onClick={(e) => {
            e.preventDefault();
            onSelect(dateString);
          }}
          className={`h-10 md:h-12 w-full rounded-full flex items-center justify-center text-sm transition-all relative ${
            isSelected 
              ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 font-bold z-10' 
              : isPast 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:text-[#D4AF37]'
          }`}
        >
          {day}
          {isToday && !isSelected && (
            <div className="absolute bottom-1.5 w-1 h-1 bg-[#D4AF37] rounded-full" />
          )}
        </motion.button>
      );
    }

    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="w-full">
      <div className={`p-4 md:p-6 bg-white/80 backdrop-blur-md rounded-2xl border transition-all ${error ? 'border-red-500 shadow-sm shadow-red-500/10' : 'border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-limelight text-[#D4AF37] text-lg">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <button 
              onClick={(e) => { e.preventDefault(); handlePrevMonth(); }}
              className="p-2 hover:bg-[#D4AF37]/10 rounded-full transition-colors text-[#D4AF37]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); handleNextMonth(); }}
              className="p-2 hover:bg-[#D4AF37]/10 rounded-full transition-colors text-[#D4AF37]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-3">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {renderDays()}
        </div>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[10px] text-red-500 mt-2 ml-1 font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
