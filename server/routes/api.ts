import express, { Request, Response } from 'express';
import { getCache } from '../cache/cacheManager';
import { logger } from '../utils/logger';

// Create router
const router = express.Router();

// Get all recovery dashboard data
router.get('/dashboard', (req: Request, res: Response) => {
  try {
    // Get all dashboard data from cache
    const refugeeCount = getCache('refugee_count');
    const idpCount = getCache('idp_count');
    const aidCount = getCache('aid_count');
    const returneeCount = getCache('returnee_count');

    // Format response
    const response = {
      refugees: refugeeCount ? refugeeCount.data : null,
      idps: idpCount ? idpCount.data : null,
      aid: aidCount ? aidCount.data : null,
      returnees: returneeCount ? returneeCount.data : null,
      timestamp: new Date().toISOString(),
    };

    res.json(response);
  } catch (error) {
    logger.error('Error fetching dashboard data', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Get refugee data
router.get('/refugees', (req: Request, res: Response) => {
  try {
    const data = getCache('refugee_count');

    if (!data) {
      return res.status(404).json({ error: 'Refugee data not available' });
    }

    res.json(data.data);
  } catch (error) {
    logger.error('Error fetching refugee data', error);
    res.status(500).json({ error: 'Failed to fetch refugee data' });
  }
});

// Get IDP data
router.get('/idps', (req: Request, res: Response) => {
  try {
    const data = getCache('idp_count');

    if (!data) {
      return res.status(404).json({ error: 'IDP data not available' });
    }

    res.json(data.data);
  } catch (error) {
    logger.error('Error fetching IDP data', error);
    res.status(500).json({ error: 'Failed to fetch IDP data' });
  }
});

// Get aid data
router.get('/aid', (req: Request, res: Response) => {
  try {
    const data = getCache('aid_count');

    if (!data) {
      return res.status(404).json({ error: 'Aid data not available' });
    }

    res.json(data.data);
  } catch (error) {
    logger.error('Error fetching aid data', error);
    res.status(500).json({ error: 'Failed to fetch aid data' });
  }
});

// Get returnee data
router.get('/returnees', (req: Request, res: Response) => {
  try {
    const data = getCache('returnee_count');

    if (!data) {
      return res.status(404).json({ error: 'Returnee data not available' });
    }

    res.json(data.data);
  } catch (error) {
    logger.error('Error fetching returnee data', error);
    res.status(500).json({ error: 'Failed to fetch returnee data' });
  }
});

// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export { router as apiRouter };
