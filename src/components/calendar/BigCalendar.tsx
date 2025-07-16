import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import { arSA } from 'date-fns/locale/ar-SA';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en': enUS,
  'ar': arSA,
};

interface Props {
  events: Event[];
  language: 'en' | 'ar';
}

const BigCalendar: React.FC<Props> = ({ events, language }) => {
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
  });

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      culture={language}
    />
  );
};

export default BigCalendar;
