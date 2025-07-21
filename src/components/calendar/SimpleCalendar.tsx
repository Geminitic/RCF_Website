import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CalendarEvent } from '../../types';

interface Props {
  events: CalendarEvent[];
  currentDate: Date;
  onDateChange: (date: Date) => void;
  currentLanguage: { code: string };
  t: (key: string, en: string, ar: string) => string;
}

const SimpleCalendar: React.FC<Props> = ({ events, currentDate, onDateChange, currentLanguage, t }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: Array<Date | null> = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString(
    currentLanguage.code === 'ar' ? 'ar-SA' : 'en-US',
    { month: 'long', year: 'numeric' }
  );

  const getEventsForDate = (date: Date | null) => {
    if (!date) return [];
    return events.filter(event => {
      const eventDate = event.date ? new Date(event.date) : new Date();
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className={`text-xl font-semibold text-gray-800 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{monthName}</h2>
        <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
            {t(`day-${day.toLowerCase()}`, day, day)}
          </div>
        ))}

        {days.map((day, index) => {
          const dayEvents = day ? getEventsForDate(day) : [];
          const isToday = day && day.toDateString() === new Date().toDateString();
          const isSelected = day && selectedDate && day.toDateString() === selectedDate.toDateString();
          return (
            <div
              key={index}
              className={`min-h-[80px] p-2 border border-gray-200 rounded-lg cursor-pointer ${!day ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'} ${isToday ? 'ring-2 ring-teal-500' : ''} ${isSelected ? 'bg-teal-50' : ''}`}
              onClick={() => day && setSelectedDate(day)}
            >
              {day && (
                <>
                  <div className={`text-sm ${isToday ? 'font-bold text-teal-600' : 'text-gray-700'}`}>{day.getDate()}</div>
                  {dayEvents.length > 0 && (
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, i) => (
                        <div
                          key={i}
                          className="text-xs bg-teal-100 text-teal-800 px-1 py-0.5 rounded truncate"
                          title={t('event-title', event.title, event.titleAr || event.title)}
                        >
                          {t('event-title', event.title, event.titleAr || event.title)}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500">+{dayEvents.length - 2} {t('more', 'more', 'المزيد')}</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className={`font-semibold text-gray-800 mb-3 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
            {t('events-on', 'Events on', 'الفعاليات في')} {selectedDate.toLocaleDateString()}
          </h3>
          {getEventsForDate(selectedDate).length === 0 ? (
            <p className={`text-gray-500 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{t('no-events', 'No events on this date', 'لا توجد فعاليات في هذا التاريخ')}</p>
          ) : (
            <div className="space-y-2">
              {getEventsForDate(selectedDate).map((event, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className={`font-medium text-gray-800 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{t('event-title', event.title, event.titleAr || event.title)}</h4>
                  {event.time && (
                    <p className={`text-sm text-gray-600 mt-1 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{t('event-time', event.time, event.timeAr || event.time)}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SimpleCalendar;
