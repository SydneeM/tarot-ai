import express, { type Request, type Response } from 'express';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/threeCard', async (_req: Request, res: Response) => {
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
    res.json(response);
  } catch {
    res.status(500).json({ error: 'Could not read tarot cards' });
  }
});

export { router as readingsRoutes };
