import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const PORT = process.env.PORT || 3001;

let cachedEvents = null;
let cacheTimestamp = 0;
const CACHE_DURATION_MS = 60 * 60 * 1000; // one hour

// Enhanced organization website discovery
async function fetchOrgSites() {
  const url = 'https://www.madaniya-csn.org/madaniya-member-organisations-1';
  try {
    const { data } = await axios.get(url, { timeout: 10000 });
    const $ = cheerio.load(data);
    const orgSites = new Set();
    
    // Look for organization websites in structured content
    $('a[href^="http"]').each((_, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim();
      
      if (href && !isExcludedDomain(href)) {
        // Prioritize links that appear to be organization websites
        const parent = $(el).parent();
        const context = parent.text().toLowerCase();
        
        // Skip social media and common non-org domains
        if (isOrganizationWebsite(href, text, context)) {
          orgSites.add(href);
        }
      }
    });
    
    console.log(`Found ${orgSites.size} organization websites`);
    return Array.from(orgSites);
  } catch (err) {
    console.error('Failed to fetch organization links:', err.message);
    return [];
  }
}

function isExcludedDomain(url) {
  const excludedDomains = [
    'facebook.com', 'twitter.com', 'instagram.com', 'linkedin.com',
    'youtube.com', 'gmail.com', 'yahoo.com', 'hotmail.com',
    'madaniya-csn.org', 'google.com', 'wikipedia.org'
  ];
  
  try {
    const domain = new URL(url).hostname.toLowerCase();
    return excludedDomains.some(excluded => domain.includes(excluded));
  } catch {
    return true;
  }
}

function isOrganizationWebsite(url, linkText, context) {
  const orgIndicators = [
    'website', 'site', 'organization', 'foundation', 'ngo',
    'association', 'center', 'institute', 'society', 'network'
  ];
  
  const combined = `${linkText} ${context}`.toLowerCase();
  return orgIndicators.some(indicator => combined.includes(indicator)) ||
         linkText.length > 10; // Longer link text often indicates org names
}

// Discover event-specific pages on organization websites
async function discoverEventPages(baseUrl) {
  const eventPaths = [
    '/events', '/calendar', '/activities', '/news', '/blog',
    '/programs', '/workshops', '/training', '/announcements',
    '/ar/events', '/ar/calendar', '/ar/activities', '/ar/news'
  ];
  
  const eventPages = [baseUrl]; // Always include the main page
  
  try {
    // First, try common event page paths
    for (const path of eventPaths) {
      try {
        const testUrl = new URL(path, baseUrl).toString();
        const response = await axios.head(testUrl, { timeout: 3000 });
        if (response.status === 200) {
          eventPages.push(testUrl);
        }
      } catch {
        // Page doesn't exist, continue
      }
    }
    
    // Then, scrape the main page to find event-related links
    const { data } = await axios.get(baseUrl, { timeout: 5000 });
    const $ = cheerio.load(data);
    
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().toLowerCase();
      
      if (href && isEventRelatedLink(text, href)) {
        try {
          const fullUrl = new URL(href, baseUrl).toString();
          if (!eventPages.includes(fullUrl)) {
            eventPages.push(fullUrl);
          }
        } catch {
          // Invalid URL, skip
        }
      }
    });
    
  } catch (err) {
    console.error(`Failed to discover event pages for ${baseUrl}:`, err.message);
  }
  
  return eventPages.slice(0, 5); // Limit to 5 pages per organization
}

function isEventRelatedLink(text, href) {
  const eventKeywords = [
    'event', 'calendar', 'activity', 'workshop', 'training',
    'conference', 'seminar', 'meeting', 'program', 'news',
    'announcement', 'deadline', 'opportunity'
  ];
  
  const arabicEventKeywords = [
    'فعالية', 'نشاط', 'تقويم', 'ورشة', 'تدريب',
    'مؤتمر', 'ندوة', 'اجتماع', 'برنامج', 'أخبار'
  ];
  
  const combined = `${text} ${href}`.toLowerCase();
  return [...eventKeywords, ...arabicEventKeywords].some(keyword => 
    combined.includes(keyword)
  );
}

// Enhanced event extraction with intelligent parsing
function extractEvents(html, sourceUrl) {
  const $ = cheerio.load(html);
  const events = [];
  
  // Strategy 1: Look for structured event listings
  const eventSelectors = [
    '.event', '.activity', '.news-item', '.post',
    '[class*="event"]', '[class*="activity"]', '[class*="calendar"]',
    'article', '.content-item', '.list-item'
  ];
  
  eventSelectors.forEach(selector => {
    $(selector).each((_, element) => {
      const event = extractEventFromElement($, element, sourceUrl);
      if (event && event.title) {
        events.push(event);
      }
    });
  });
  
  // Strategy 2: Look for date patterns and surrounding content
  const datePatterns = [
    /\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}/g,
    /\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{2,4}/gi,
    /\d{1,2}\s+(كانون|شباط|آذار|نيسان|أيار|حزيران|تموز|آب|أيلول|تشرين|كانون)\s+\d{2,4}/g
  ];
  
  $('*').each((_, element) => {
    const text = $(element).text();
    datePatterns.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) {
        const event = extractEventFromDateContext($, element, sourceUrl, matches[0]);
        if (event && event.title) {
          events.push(event);
        }
      }
    });
  });
  
  // Strategy 3: Look for links with event-related keywords
  $('a[href]').each((_, element) => {
    const linkText = $(element).text().trim();
    const href = $(element).attr('href');
    
    if (href && isEventRelatedText(linkText)) {
      const event = {
        id: generateEventId(sourceUrl, events.length),
        title: cleanTitle(linkText),
        link: resolveUrl(href, sourceUrl),
        source: sourceUrl,
        organizer: extractOrganizerFromUrl(sourceUrl),
        priority: calculatePriority(linkText, ''),
        category: categorizeEvent(linkText, ''),
        deadline: isDeadlineEvent(linkText)
      };
      
      events.push(event);
    }
  });
  
  // Remove duplicates and sort by priority
  const uniqueEvents = removeDuplicateEvents(events);
  return uniqueEvents.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

function extractEventFromElement($, element, sourceUrl) {
  const $el = $(element);
  const text = $el.text();
  
  // Extract title
  let title = $el.find('h1, h2, h3, h4, .title, .headline').first().text().trim();
  if (!title) {
    title = $el.find('a').first().text().trim();
  }
  if (!title) {
    const firstLine = text.split('\n')[0].trim();
    title = firstLine.length > 10 && firstLine.length < 200 ? firstLine : '';
  }
  
  if (!title || title.length < 5) return null;
  
  // Extract description
  let description = $el.find('p, .description, .summary').first().text().trim();
  if (!description) {
    const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 20);
    description = sentences.slice(0, 2).join('. ');
  }
  
  // Extract date
  const dateText = extractDateFromText(text);
  
  // Extract time
  const timeText = extractTimeFromText(text);
  
  // Extract location
  const location = extractLocationFromText(text);
  
  // Extract link
  const link = $el.find('a[href]').first().attr('href');
  
  return {
    id: generateEventId(sourceUrl, title),
    title: cleanTitle(title),
    description: description.substring(0, 500),
    date: dateText,
    time: timeText,
    location: location,
    link: link ? resolveUrl(link, sourceUrl) : undefined,
    source: sourceUrl,
    organizer: extractOrganizerFromUrl(sourceUrl),
    priority: calculatePriority(title, description),
    category: categorizeEvent(title, description),
    deadline: isDeadlineEvent(title + ' ' + description),
    tags: extractTags(title + ' ' + description)
  };
}

function extractEventFromDateContext($, element, sourceUrl, dateMatch) {
  const $el = $(element);
  const context = $el.closest('div, article, section, li').text();
  
  // Look for title in the same context
  const lines = context.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const titleLine = lines.find(line => 
    line.length > 10 && 
    line.length < 200 && 
    !line.match(/^\d/) &&
    line !== dateMatch
  );
  
  if (!titleLine) return null;
  
  return {
    id: generateEventId(sourceUrl, titleLine),
    title: cleanTitle(titleLine),
    description: context.substring(0, 300),
    date: dateMatch,
    source: sourceUrl,
    organizer: extractOrganizerFromUrl(sourceUrl),
    priority: calculatePriority(titleLine, context),
    category: categorizeEvent(titleLine, context),
    deadline: isDeadlineEvent(context),
    tags: extractTags(context)
  };
}

function extractDateFromText(text) {
  const datePatterns = [
    /\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}/,
    /\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{2,4}/i,
    /\d{1,2}\s+(كانون|شباط|آذار|نيسان|أيار|حزيران|تموز|آب|أيلول|تشرين|كانون)\s+\d{2,4}/
  ];
  
  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  
  return undefined;
}

function extractTimeFromText(text) {
  const timePatterns = [
    /\d{1,2}:\d{2}\s*(AM|PM|am|pm)/,
    /\d{1,2}:\d{2}/,
    /\d{1,2}\s*(AM|PM|am|pm)/
  ];
  
  for (const pattern of timePatterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }
  
  return undefined;
}

function extractLocationFromText(text) {
  const locationKeywords = [
    'at ', 'in ', 'location:', 'venue:', 'address:',
    'في ', 'بـ ', 'الموقع:', 'العنوان:'
  ];
  
  for (const keyword of locationKeywords) {
    const index = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (index !== -1) {
      const afterKeyword = text.substring(index + keyword.length);
      const location = afterKeyword.split(/[,\n\r]|\.(?!\d)/)[0].trim();
      if (location.length > 3 && location.length < 100) {
        return location;
      }
    }
  }
  
  return undefined;
}

function isEventRelatedText(text) {
  const eventKeywords = [
    'workshop', 'training', 'conference', 'seminar', 'meeting',
    'event', 'activity', 'program', 'session', 'course',
    'deadline', 'application', 'registration', 'call for',
    'opportunity', 'grant', 'funding', 'scholarship',
    'ورشة', 'تدريب', 'مؤتمر', 'ندوة', 'اجتماع',
    'فعالية', 'نشاط', 'برنامج', 'جلسة', 'دورة',
    'موعد', 'تطبيق', 'تسجيل', 'دعوة', 'فرصة',
    'منحة', 'تمويل', 'منحة دراسية'
  ];
  
  const lowerText = text.toLowerCase();
  return eventKeywords.some(keyword => lowerText.includes(keyword)) &&
         text.length > 10 && text.length < 200;
}

function calculatePriority(title, description) {
  let priority = 1;
  const text = `${title} ${description}`.toLowerCase();
  
  // High priority keywords
  const highPriorityKeywords = [
    'deadline', 'urgent', 'last chance', 'closing soon',
    'funding', 'grant', 'scholarship', 'opportunity',
    'موعد نهائي', 'عاجل', 'فرصة أخيرة', 'تمويل', 'منحة'
  ];
  
  // Medium priority keywords
  const mediumPriorityKeywords = [
    'workshop', 'training', 'conference', 'seminar',
    'ورشة', 'تدريب', 'مؤتمر', 'ندوة'
  ];
  
  if (highPriorityKeywords.some(keyword => text.includes(keyword))) {
    priority += 3;
  } else if (mediumPriorityKeywords.some(keyword => text.includes(keyword))) {
    priority += 2;
  }
  
  // Boost priority for recent dates
  const dateMatch = extractDateFromText(text);
  if (dateMatch) {
    const eventDate = parseDate(dateMatch);
    if (eventDate) {
      const now = new Date();
      const daysDiff = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
      
      if (daysDiff >= 0 && daysDiff <= 30) {
        priority += 2; // Upcoming events in next 30 days
      } else if (daysDiff > 30 && daysDiff <= 90) {
        priority += 1; // Events in next 90 days
      }
    }
  }
  
  return priority;
}

function categorizeEvent(title, description) {
  const text = `${title} ${description}`.toLowerCase();
  
  const categories = {
    'funding': ['funding', 'grant', 'scholarship', 'financial', 'تمويل', 'منحة'],
    'workshop': ['workshop', 'training', 'course', 'ورشة', 'تدريب', 'دورة'],
    'conference': ['conference', 'summit', 'forum', 'مؤتمر', 'قمة', 'منتدى'],
    'cultural': ['cultural', 'art', 'music', 'festival', 'ثقافي', 'فن', 'موسيقى'],
    'educational': ['education', 'learning', 'academic', 'تعليم', 'تعلم', 'أكاديمي'],
    'networking': ['networking', 'meeting', 'gathering', 'تواصل', 'اجتماع', 'تجمع']
  };
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }
  
  return 'general';
}

function isDeadlineEvent(text) {
  const deadlineKeywords = [
    'deadline', 'due date', 'closing date', 'last day',
    'application deadline', 'submission deadline',
    'موعد نهائي', 'تاريخ الاستحقاق', 'آخر موعد'
  ];
  
  return deadlineKeywords.some(keyword => 
    text.toLowerCase().includes(keyword.toLowerCase())
  );
}

function extractTags(text) {
  const tags = [];
  const tagKeywords = [
    'syria', 'syrian', 'ngo', 'civil society', 'humanitarian',
    'development', 'peace', 'women', 'youth', 'education',
    'سوريا', 'سوري', 'منظمة', 'مجتمع مدني', 'إنساني',
    'تنمية', 'سلام', 'نساء', 'شباب', 'تعليم'
  ];
  
  const lowerText = text.toLowerCase();
  tagKeywords.forEach(keyword => {
    if (lowerText.includes(keyword.toLowerCase())) {
      tags.push(keyword);
    }
  });
  
  return tags.slice(0, 5); // Limit to 5 tags
}

function parseDate(dateString) {
  try {
    // Handle various date formats
    const formats = [
      /(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/,
      /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{2,4})/i
    ];
    
    for (const format of formats) {
      const match = dateString.match(format);
      if (match) {
        if (format.source.includes('Jan|Feb')) {
          // Month name format
          const day = parseInt(match[1]);
          const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                             'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
          const month = monthNames.indexOf(match[2].toLowerCase().substring(0, 3));
          const year = parseInt(match[3]);
          return new Date(year, month, day);
        } else {
          // Numeric format (assume DD/MM/YYYY)
          const day = parseInt(match[1]);
          const month = parseInt(match[2]) - 1; // JavaScript months are 0-indexed
          const year = parseInt(match[3]);
          return new Date(year, month, day);
        }
      }
    }
    
    return new Date(dateString);
  } catch {
    return null;
  }
}

function cleanTitle(title) {
  return title
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF-]/g, '')
    .trim()
    .substring(0, 200);
}

function generateEventId(source, identifier) {
  const sourceHash = source.split('/')[2] || 'unknown';
  const idString = typeof identifier === 'string' ? identifier : identifier.toString();
  return `${sourceHash}-${idString.replace(/\s+/g, '-').toLowerCase()}`.substring(0, 50);
}

function resolveUrl(href, baseUrl) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return href;
  }
}

function extractOrganizerFromUrl(url) {
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, '').split('.')[0];
  } catch {
    return 'Unknown';
  }
}

function removeDuplicateEvents(events) {
  const seen = new Set();
  return events.filter(event => {
    const key = `${event.title}-${event.date}`.toLowerCase();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

// Main scraping function with enhanced capabilities
async function scrapeEvents() {
  if (cachedEvents && Date.now() - cacheTimestamp < CACHE_DURATION_MS) {
    console.log('Returning events from cache');
    return cachedEvents;
  }

  console.log('Starting enhanced event scraping...');
  const orgSites = await fetchOrgSites();
  const allEvents = [];
  
  console.log(`Scraping ${orgSites.length} organization websites...`);
  
  for (let i = 0; i < orgSites.length; i++) {
    const site = orgSites[i];
    console.log(`Processing ${i + 1}/${orgSites.length}: ${site}`);
    
    try {
      // Discover event-specific pages
      const eventPages = await discoverEventPages(site);
      console.log(`Found ${eventPages.length} pages to scrape for ${site}`);
      
      // Scrape each event page
      for (const page of eventPages) {
        try {
          const { data } = await axios.get(page, { 
            timeout: 8000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; EventScraper/1.0)'
            }
          });
          
          const events = extractEvents(data, site);
          allEvents.push(...events);
          console.log(`Extracted ${events.length} events from ${page}`);
          
          // Rate limiting - wait between requests
          await new Promise(resolve => setTimeout(resolve, 1000));
          
        } catch (err) {
          console.error(`Failed to scrape page ${page}:`, err.message);
        }
      }
      
      // Longer delay between organizations
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (err) {
      console.error(`Failed to process organization ${site}:`, err.message);
    }
  }
  
  console.log(`Scraping complete. Found ${allEvents.length} total events.`);
  
  // Remove duplicates and sort by priority
  const uniqueEvents = removeDuplicateEvents(allEvents);
  const sortedEvents = uniqueEvents.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  console.log(`Returning ${sortedEvents.length} unique events after deduplication.`);
  const finalEvents = sortedEvents.slice(0, 100); // Limit to top 100 events
  cachedEvents = finalEvents;
  cacheTimestamp = Date.now();
  return finalEvents;
}

// API endpoints
app.get('/api/events', async (req, res) => {
  try {
    console.log('API request received for events');
    const events = await scrapeEvents();
    
    // Add metadata to response
    const response = {
      events: events,
      metadata: {
        totalEvents: events.length,
        lastUpdated: new Date().toISOString(),
        categories: [...new Set(events.map(e => e.category))],
        sources: [...new Set(events.map(e => e.organizer))]
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in /api/events:', error);
    res.status(500).json({ 
      error: 'Failed to fetch events',
      message: error.message 
    });
  }
});

app.get('/api/events/featured', async (req, res) => {
  try {
    const events = await scrapeEvents();
    const featuredEvents = events
      .filter(event => event.priority && event.priority > 3)
      .slice(0, 10);
    
    res.json(featuredEvents);
  } catch (error) {
    console.error('Error in /api/events/featured:', error);
    res.status(500).json({ 
      error: 'Failed to fetch featured events',
      message: error.message 
    });
  }
});

app.get('/api/events/deadlines', async (req, res) => {
  try {
    const events = await scrapeEvents();
    const deadlineEvents = events
      .filter(event => event.deadline)
      .slice(0, 20);
    
    res.json(deadlineEvents);
  } catch (error) {
    console.error('Error in /api/events/deadlines:', error);
    res.status(500).json({ 
      error: 'Failed to fetch deadline events',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '2.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Enhanced Calendar API server listening on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /api/events - All scraped events');
  console.log('  GET /api/events/featured - High priority events');
  console.log('  GET /api/events/deadlines - Deadline events');
  console.log('  GET /api/health - Health check');
});