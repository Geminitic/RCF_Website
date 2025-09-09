export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  location: string;
  coordinates: [number, number];
  status: 'active' | 'completed' | 'planned';
  category: string;
  image: string;
  participants: number;
  startDate: string;
}

export interface CommunityMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  image: string;
  skills: string[];
  location: string;
  social?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  author: string;
  date: string;
  category: 'news' | 'update' | 'event' | 'media';
  image?: string;
  tags: string[];
  featured: boolean;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface CalendarEvent {
  id: string;
  title: string;
  titleAr?: string;
  category?: string;
  date?: string;
  time?: string;
  timeAr?: string;
  duration?: string;
  durationAr?: string;
  location?: string;
  locationAr?: string;
  description?: string;
  descriptionAr?: string;
  attendees?: number;
  maxAttendees?: number;
  isOnline?: boolean;
  registrationRequired?: boolean;
  organizer?: string;
  organizerAr?: string;
  link?: string;
  source?: string;
  priority?: number;
  tags?: string[];
  deadline?: boolean;
  featured?: boolean;
}