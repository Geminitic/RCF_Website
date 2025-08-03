from celery import shared_task
import subprocess
import json
import psycopg2
from psycopg2.extras import RealDictCursor
import logging
import os
from dotenv import load_dotenv
from process_events import extract_event_details

load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

DB_PARAMS = {
    'dbname': os.getenv('DB_NAME', 'eventdb'),
    'user': os.getenv('DB_USER', 'eventuser'),
    'password': os.getenv('DB_PASSWORD', 'eventpass'),
    'host': os.getenv('DB_HOST', 'localhost'),
    'port': os.getenv('DB_PORT', '5432'),
}

@shared_task
def run_spider():
    """Run the Scrapy spider to scrape event data."""
    output_file = 'events.json'
    try:
        subprocess.run(['scrapy', 'crawl', 'event_spider', '-o', output_file], cwd='event_scraper', check=True)
        logging.info(f"Scrapy spider completed. Output saved to {output_file}")
        return output_file
    except subprocess.CalledProcessError as e:
        logging.error(f"Error running Scrapy spider: {str(e)}")
        raise

@shared_task
def process_events_task(input_file='events.json', output_file='processed_events.json'):
    """Process scraped data using spaCy for NER."""
    try:
        with open(input_file, 'r') as f:
            events = json.load(f)

        processed_events = []
        for event in events:
            details = extract_event_details(event.get('description', ''))
            processed_events.append({**event, **details})

        with open(output_file, 'w') as f:
            json.dump(processed_events, f, indent=2)
        logging.info(f"Processed {len(events)} events and saved to {output_file}")
        return output_file
    except Exception as e:
        logging.error(f"Error processing events: {str(e)}")
        raise

@shared_task
def store_events_task(input_file='processed_events.json'):
    """Store processed events in PostgreSQL database."""
    try:
        with open(input_file, 'r') as f:
            events = json.load(f)

        conn = psycopg2.connect(**DB_PARAMS)
        cursor = conn.cursor()
        inserted_count = 0

        for event in events:
            cursor.execute(
                """
                INSERT INTO events (title, date, location, description, link, organizer)
                VALUES (%s, %s, %s, %s, %s, %s)
                ON CONFLICT (link) DO UPDATE
                SET title = EXCLUDED.title,
                    date = EXCLUDED.date,
                    location = EXCLUDED.location,
                    description = EXCLUDED.description,
                    organizer = EXCLUDED.organizer
                """,
                (event['title'], event['date'], event['location'], event['description'], event['link'], event['organizer'])
            )
            inserted_count += 1

        conn.commit()
        logging.info(f"Stored {inserted_count} events in the database")
    except Exception as e:
        logging.error(f"Error storing events: {str(e)}")
        raise
    finally:
        conn.close()
