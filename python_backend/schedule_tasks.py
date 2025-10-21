from celery import Celery
from celery.schedules import crontab
from tasks import run_spider, process_events_task, store_events_task

app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/1')

app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
)

@app.task
def scrape_and_store():
    chain = run_spider.s() | process_events_task.s() | store_events_task.s()
    return chain()

app.conf.beat_schedule = {
    'scrape-and-store-every-day': {
        'task': 'schedule_tasks.scrape_and_store',
        'schedule': crontab(hour=7, minute=30),
    },
}
