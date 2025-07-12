import React, { useEffect, useState } from 'react';
import type { CalendarEvent } from '../../types';

const CalendarWidget: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.ok ? res.json() : { events: [] })
      .then(data => setEvents(data.events.slice(0, 5)))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-2">
        {events.map(event => (
          <li key={event.id} className="border-b pb-2">
            <span className="font-medium">{event.title}</span>
            {event.date && <span className="text-sm text-stone-600 ml-2">{new Date(event.date).toLocaleDateString()}</span>}
          </li>
        ))}
      </ul>
      <a href="/calendar" className="text-emerald-600 inline-block mt-4">View full calendar →</a>
    </div>
  );
};

export default CalendarWidget;
