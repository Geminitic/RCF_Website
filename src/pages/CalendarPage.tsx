import React, { useState, useEffect, useCallback } from 'react';
import SimpleCalendar from '../components/calendar/SimpleCalendar';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Filter,
  Grid,
  List,
  Plus,
  ExternalLink,
  AlertCircle,
  Star,
  Tag,
  Loader
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { CalendarEvent } from '../types';

const initialEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Syrian Innovation Summit',
    titleAr: 'قمة الابتكار السوري',
    description: 'Annual gathering of Syrian entrepreneurs and innovators',
    descriptionAr: 'التجمع السنوي لرواد الأعمال والمبتكرين السوريين',
    date: new Date(2025, 0, 25).toISOString(),
    time: '10:00 AM - 6:00 PM',
    timeAr: '10:00 ص - 6:00 م',
    location: 'Virtual Event',
    locationAr: 'حدث افتراضي',
    category: 'conference',
    organizer: 'Syrian Innovation Network',
    organizerAr: 'شبكة الابتكار السورية',
    isOnline: true,
    registrationRequired: true,
    link: '#'
  },
  {
    id: '2',
    title: 'Community Grant Workshop',
    titleAr: 'ورشة عمل المنح المجتمعية',
    description: 'Learn how to apply for community development grants',
    descriptionAr: 'تعلم كيفية التقديم على منح التنمية المجتمعية',
    date: new Date(2025, 0, 28).toISOString(),
    time: '2:00 PM - 4:00 PM',
    timeAr: '2:00 م - 4:00 م',
    location: 'Online',
    locationAr: 'عبر الإنترنت',
    category: 'funding',
    organizer: 'Rhizome Foundation',
    organizerAr: 'مؤسسة ريزوم',
    isOnline: true,
    registrationRequired: false,
    link: '#'
  }
];

const CalendarPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());

  const categories = [
    { key: 'all', en: 'All Events', ar: 'جميع الفعاليات', color: 'bg-gray-500' },
    { key: 'funding', en: 'Funding', ar: 'التمويل', color: 'bg-green-500' },
    { key: 'workshop', en: 'Workshops', ar: 'ورش العمل', color: 'bg-blue-500' },
    { key: 'conference', en: 'Conferences', ar: 'المؤتمرات', color: 'bg-purple-500' },
    { key: 'cultural', en: 'Cultural', ar: 'ثقافية', color: 'bg-pink-500' },
    { key: 'educational', en: 'Educational', ar: 'تعليمية', color: 'bg-orange-500' },
    { key: 'networking', en: 'Networking', ar: 'تواصل', color: 'bg-indigo-500' },
    { key: 'general', en: 'General', ar: 'عام', color: 'bg-gray-500' }
  ];


  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/events');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.events) {
        // Merge scraped events with initial events
        const allEvents = [...initialEvents, ...data.events];
        setEvents(allEvents);
        setLastUpdated(data.metadata?.lastUpdated || new Date().toISOString());
      } else {
        // Fallback to just scraped events if no metadata
        const scrapedEvents = Array.isArray(data) ? data : [];
        setEvents([...initialEvents, ...scrapedEvents]);
        setLastUpdated(new Date().toISOString());
      }
    } catch (err) {
      console.error('Failed to fetch calendar events:', err);
      setError('Failed to load live events. Showing sample events.');
      setEvents(initialEvents); // Fallback to initial events
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const renderCalendarView = () => {
    return (
      <SimpleCalendar
        events={filteredEvents}
        currentDate={currentCalendarDate}
        onDateChange={setCurrentCalendarDate}
        currentLanguage={currentLanguage}
        t={t}
      />
    );
  };

  const renderListView = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader className="h-8 w-8 animate-spin text-indigo-600 mr-3" />
          <span className="text-lg text-stone-600">{t('loading','Loading events...','جاري تحميل الفعاليات...')}</span>
        </div>
      );
    }

    if (filteredEvents.length === 0) {
      return (
        <div className="text-center py-12">
          <CalendarIcon className="h-16 w-16 text-stone-400 mx-auto mb-4" />
          <h3 className={`text-xl font-semibold text-stone-600 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{t('no-events-found','No events found','لم يتم العثور على فعاليات')}</h3>
          <p className={`text-stone-500 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>{t('try-adjusting','Try adjusting your filters or check back later.','حاول تعديل الفلاتر أو تحقق لاحقًا.')}</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {filteredEvents.map((event, index) => {
          const category = categories.find(cat => cat.key === event.category);
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4"
              style={{
                borderLeftColor:
                  category?.color
                    ?.replace('bg-', '#')
                    .replace('gray-500', '#6b7280')
                    .replace('green-500', '#10b981')
                    .replace('blue-500', '#3b82f6')
                    .replace('purple-500', '#8b5cf6')
                    .replace('pink-500', '#ec4899')
                    .replace('orange-500', '#f97316')
                    .replace('indigo-500', '#6366f1') || '#6b7280'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 rounded-full mr-3 ${category?.color || 'bg-gray-500'}`} />
                    <span className={`text-xs font-medium text-stone-500 uppercase tracking-wide ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t(`category-${event.category}`, event.category, event.category)}
                    </span>
                    {event.priority && event.priority > 3 && (
                      <Star className="h-4 w-4 text-yellow-500 ml-2" />
                    )}
                    {event.deadline && (
                      <AlertCircle className="h-4 w-4 text-red-500 ml-2" />
                    )}
                  </div>
                  <h3 className={`text-xl font-bold text-stone-900 mb-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('event-title', event.title, event.titleAr)}
                  </h3>
                  {event.description && (
                    <p className={`text-stone-600 mb-4 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('event-description', event.description, event.descriptionAr)}
                    </p>
                  )}
                </div>
                {event.registrationRequired && (
                  <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                    <span className={`mr-2 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                      {t('register', 'Register', 'سجل')}
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-stone-600 mb-4">
                {event.date && (
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                      {t('event-time', event.time, event.timeAr)}
                      {event.duration && ` (${t('event-duration', event.duration, event.durationAr)})`}
                    </span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className={currentLanguage.code === 'ar' ? 'font-arabic' : ''}>
                      {t('event-location', event.location, event.locationAr)}
                    </span>
                  </div>
                )}
                {event.attendees && event.maxAttendees && (
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>
                      {event.attendees}/{event.maxAttendees} {t('attendees', 'attendees', 'حاضر')}
                    </span>
                  </div>
                )}
              </div>

              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <div className="flex items-center space-x-4">
                  <span className={`text-sm text-stone-500 ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}>
                    {t('organized-by', 'Organized by', 'نظمت من قبل')} {t('event-organizer', event.organizer, event.organizerAr)}
                  </span>
                  {event.isOnline && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {t('online-event', 'Online Event', 'فعالية عبر الإنترنت')}
                    </span>
                  )}
                  {event.deadline && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      {t('deadline', 'Deadline', 'موعد نهائي')}
                    </span>
                  )}
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center"
                  >
                    {t('view-details', 'View Details', 'عرض التفاصيل')}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-indigo-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${currentLanguage.code === 'ar' ? 'font-arabic' : ''}`}
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('calendar-title', 'Events & Opportunities', 'الفعاليات والفرص')}
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              {t(
                'calendar-subtitle',
                'Discover live events, workshops, and opportunities from Syrian organizations and partners worldwide.',
                'اكتشف الفعاليات المباشرة وورش العمل والفرص من المنظمات السورية والشركاء حول العالم.'
              )}
            </p>

            {error && (
              <div className="max-w-md mx-auto mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span className="text-sm">{error}</span>
                </div>
              </div>
            )}

            {lastUpdated && (
              <div className="text-sm text-indigo-200 mb-6">
                {t('last-updated', 'Last updated', 'آخر تحديث')}: {new Date(lastUpdated).toLocaleString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={fetchEvents}
                disabled={loading}
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                  <Loader className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <Plus className="h-5 w-5 mr-2" />
                )}
                {t('refresh-events', 'Refresh Events', 'تحديث الفعاليات')}
              </button>
              <button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition-colors">
                {t('subscribe-calendar', 'Subscribe to Calendar', 'اشترك في التقويم')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* View Toggle */}
            <div className="flex items-center bg-stone-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('calendar')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'calendar'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Grid className="h-4 w-4 mr-2" />
                {t('calendar-view', 'Calendar', 'التقويم')}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <List className="h-4 w-4 mr-2" />
                {t('list-view', 'List', 'القائمة')}
              </button>
            </div>

            {/* Month Navigation handled by BigCalendar */}

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-stone-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  currentLanguage.code === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {t(`category-${category.key}`, category.en, category.ar)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Count */}
          <div className="mt-4 text-center text-stone-600">
            {t('showing-events', 'Showing', 'عرض')} {filteredEvents.length} {t('events', 'events', 'فعالية')}
            {selectedCategory !== 'all' && (
              <span> {t('in-category', 'in category', 'في فئة')} "{t(`category-${selectedCategory}`, selectedCategory, selectedCategory)}"</span>
            )}
          </div>
        </div>
      </section>

      {/* Calendar/List Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'calendar' ? renderCalendarView() : renderListView()}
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;