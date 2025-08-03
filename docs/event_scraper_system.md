# Event Scraper System

This document outlines a Python-based pipeline for scraping event data, processing it with NLP, storing it in a PostgreSQL database, and serving it via a FastAPI server. The system relies on Celery for task scheduling and Redis as the message broker.

## Components

1. **Celery with Redis** – schedules and queues scraping jobs.
2. **Scrapy** – fetches and parses HTML from target sites.
3. **spaCy** – extracts structured event details with Named Entity Recognition (NER).
4. **PostgreSQL** – stores events.
5. **FastAPI** – exposes events via REST endpoints.

## Setup Overview

1. Install Python dependencies:
   ```bash
   pip install celery redis scrapy spacy psycopg2-binary fastapi uvicorn python-dotenv
   python -m spacy download en_core_web_sm
   ```
2. Install and start Redis and PostgreSQL.
3. Create a `.env` file with database connection information:
   ```ini
   DB_NAME=eventdb
   DB_USER=eventuser
   DB_PASSWORD=eventpass
   DB_HOST=localhost
   DB_PORT=5432
   ```
4. Create the database schema:
   ```sql
   CREATE TABLE events (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255),
       date TEXT,
       location VARCHAR(255),
       description TEXT,
       link VARCHAR(255),
       organizer VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
5. Configure Celery, Scrapy, spaCy, and FastAPI as described in the code snippets below.

## Example Celery Configuration

```python
# celery.py
from celery import Celery

app = Celery('scraper', broker='redis://localhost:6379/0', backend='redis://localhost:6379/1')
app.conf.update(task_serializer='json', accept_content=['json'], result_serializer='json', timezone='UTC', enable_utc=True)
```

## Running the Pipeline

1. Start the Celery worker and beat scheduler:
   ```bash
   celery -A schedule_tasks worker --loglevel=info
   celery -A schedule_tasks beat --loglevel=info
   ```
2. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
3. Access the API at `http://localhost:8000/events` or via the Swagger UI at `http://localhost:8000/docs`.

This setup is independent of the Node.js code in this repository and serves as a reference for a Python implementation of event scraping and storage.
