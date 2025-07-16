import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { logger } from './utils/logger';
import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';
import eventRoutes from './routes/events';
import healthRoutes from './routes/health';
import './jobs/scraper.job';
import { scrapeAndCache } from './utils/scrape';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true
  })
);

app.use(compression());
app.use(express.json({ limit: '10mb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/events', eventRoutes);
app.use('/api/health', healthRoutes);

app.use(
  (err: Error, _req: express.Request, res: express.Response) => {
    logger.error('Unhandled error:', err);
    res.status(500).json({
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
);

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});

const server = app.listen(PORT, () => {
  logger.info(`Enhanced Calendar API server listening on port ${PORT}`);
  logger.info(`API Documentation available at http://localhost:${PORT}/api-docs`);
  scrapeAndCache().catch((err) =>
    logger.error('Initial scrape failed:', err)
  );
});

export default app;
