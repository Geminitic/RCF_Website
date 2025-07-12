export interface Event {
  id: string;
  title: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
  link?: string;
  source: string;
  organizer: string;
  priority: number;
  category: string;
  deadline: boolean;
  tags: string[];
}

export interface EventsResponse {
  events: Event[];
  metadata: {
    totalEvents: number;
    lastUpdated: string;
    categories: string[];
    sources: string[];
  };
}
