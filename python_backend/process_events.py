import spacy
import json
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

nlp = spacy.load('en_core_web_sm')


def extract_event_details(event_text: str) -> dict:
    """Extract key event details from text using spaCy NER."""
    if not event_text:
        return {'date': '', 'location': '', 'organizer': ''}

    doc = nlp(event_text)
    details = {'date': '', 'location': '', 'organizer': ''}

    for ent in doc.ents:
        if ent.label_ == 'DATE' and not details['date']:
            details['date'] = ent.text
        elif ent.label_ == 'GPE' and not details['location']:
            details['location'] = ent.text
        elif ent.label_ == 'ORG' and not details['organizer']:
            details['organizer'] = ent.text
    return details


def process_scraped_data(input_file: str, output_file: str) -> None:
    """Process scraped data and enrich with NER details."""
    try:
        input_path = Path(input_file)
        if not input_path.exists():
            logging.error(f"Input file {input_file} not found.")
            return

        with open(input_file, 'r') as f:
            events = json.load(f)

        processed_events = []
        for event in events:
            details = extract_event_details(event.get('description', ''))
            processed_events.append({**event, **details})

        with open(output_file, 'w') as f:
            json.dump(processed_events, f, indent=2)
        logging.info(f"Processed {len(events)} events and saved to {output_file}")
    except Exception as e:
        logging.error(f"Error processing events: {str(e)}")
