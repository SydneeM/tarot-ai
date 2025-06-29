import type { CardData } from '@shared/types';
import express, { type Request, type Response } from 'express';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await fetch('https://tarotapi.dev/api/v1/cards');
    const data: CardData = await response.json();
    res.json(data.cards);
  } catch {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export { router as cardsRoutes };
