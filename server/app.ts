import express, { type Request, type Response } from 'express';
import OpenAI from 'openai';
import 'dotenv/config';
import { Card, type CardData } from '@shared/types';

const app = express();
const port = process.env.PORT || 3000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/cards', async (_req: Request, res: Response) => {
  try {
    const response = await fetch('https://tarotapi.dev/api/v1/cards');
    const data: CardData = await response.json();
    res.send(data.cards);
  } catch {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/interpret', async (_req: Request, res: Response) => {
  try {
    const spread = {
      past: 'Ace of cups',
      present: 'Seven of wands',
      future: 'Strength',
    };

    const prompt = `
    Perform a tarot reading using a three-card spread: Past, Present, and Future.
    
    - Past: ${spread.past}
    - Present: ${spread.present}
    - Future: ${spread.future}

    Interpret each card in the context of its position using the provided card names and meanings. 
    Tell a cohesive story instead of just reading card meanings.
  `;

    const response = await openai.responses.create({
      model: 'gpt-4.1-nano',
      input: prompt,
    });

    console.log(response);
    res.send(response);
  } catch {
    res.status(500).json({ error: 'Could not read tarot cards' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
