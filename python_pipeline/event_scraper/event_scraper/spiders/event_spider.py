import scrapy
import logging

class EventSpider(scrapy.Spider):
    name = 'event_spider'
    start_urls = ['https://example.com/events']  # Replace with actual URLs
    custom_settings = {
        'LOG_LEVEL': 'INFO',
    }

    def parse(self, response):
        self.logger.info(f"Scraping URL: {response.url}")
        for event in response.css('div.event'):
            yield {
                'title': event.css('h2::text').get(default='').strip(),
                'date': event.css('span.date::text').get(default='').strip(),
                'location': event.css('span.location::text').get(default='').strip(),
                'description': event.css('p.description::text').get(default='').strip(),
                'link': response.urljoin(event.css('a::attr(href)').get(default='')),
            }
        next_page = response.css('a.next::attr(href)').get()
        if next_page:
            yield scrapy.Request(url=response.urljoin(next_page), callback=self.parse)
