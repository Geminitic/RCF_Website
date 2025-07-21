from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import psycopg2
from psycopg2.extras import RealDictCursor
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = FastAPI(title="Event Scraper API")

DB_PARAMS = {
    'dbname': os.getenv('DB_NAME', 'eventdb'),
    'user': os.getenv('DB_USER', 'eventuser'),
    'password': os.getenv('DB_PASSWORD', 'eventpass'),
    'host': os.getenv('DB_HOST', 'localhost'),
    'port': os.getenv('DB_PORT', '5432'),
}

class Event(BaseModel):
    id: int
    title: str
    date: str
    location: str
    description: str
    link: str
    organizer: str
    created_at: str

def get_db_connection():
    try:
        conn = psycopg2.connect(**DB_PARAMS, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        logging.error(f"Database connection failed: {str(e)}")
        raise HTTPException(status_code=503, detail="Database connection error")

@app.get("/events", response_model=List[Event])
async def get_events(skip: int = 0, limit: int = 100):
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM events ORDER BY created_at DESC OFFSET %s LIMIT %s", (skip, limit))
        events = cursor.fetchall()
        return events
    except Exception as e:
        logging.error(f"Error fetching events: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching events")
    finally:
        conn.close()

@app.get("/events/{event_id}", response_model=Event)
async def get_event(event_id: int):
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM events WHERE id = %s", (event_id,))
        event = cursor.fetchone()
        if event is None:
            raise HTTPException(status_code=404, detail="Event not found")
        return event
    except Exception as e:
        logging.error(f"Error fetching event {event_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching event")
    finally:
        conn.close()
