import type { CardPosition } from '@shared/types';
import express, { type Request, type Response } from 'express';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generalInstructions = `Interpret each card in the context of its position using the provided card names and meanings,
    and create a narrative story from them. Do not ask follow up questions. Do not start the
    response with words like "certainly", "of course", or any kind of summary to the prompt. Only
    return the narrative story, do not return a card by card reading. Please respond like
    a sentient AI-based human companion in a casual tone.`;

router.post('/oneCard', async (req: Request, res: Response) => {
  try {
    const body: CardPosition[] = req.body;
    const card = body.find((item) => item.position === 'oneCardChosen');

    if (!card) {
      throw new Error('Missing data');
    }

    const prompt = `
    Perform a tarot reading using a one-card spread.
    
    ${card.card.name} has meaning ${card.card.meaning_up}

    ${generalInstructions}
  `;

    const response = await openai.responses.create({
      model: 'gpt-4.1-nano',
      input: prompt,
    });

    res.json(response);
  } catch (e) {
    res.status(500).json({ error: `Could not read tarot cards: ${e}` });
  }
});

router.post('/twoCardCross', async (req: Request, res: Response) => {
  try {
    const body: CardPosition[] = req.body;
    const situation = body.find((item) => item.position === 'twoCardSituation');
    const challenge = body.find((item) => item.position === 'twoCardChallenge');

    if (!situation || !challenge) {
      throw new Error('Missing data');
    }

    const prompt = `
    Perform a tarot reading using a two-card cross spread: Situation and Challenge.
    
    - Situation: ${situation.card.name} has meaning ${situation.card.meaning_up}
    - Challenge: ${challenge.card.name} has meaning ${challenge.card.meaning_up}

    ${generalInstructions}
  `;

    const response = await openai.responses.create({
      model: 'gpt-4.1-nano',
      input: prompt,
    });

    res.json(response);
  } catch (e) {
    res.status(500).json({ error: `Could not read tarot cards: ${e}` });
  }
});

router.post('/threeCard', async (req: Request, res: Response) => {
  try {
    const body: CardPosition[] = req.body;
    const past = body.find((item) => item.position === 'threeCardPast');
    const present = body.find((item) => item.position === 'threeCardPresent');
    const future = body.find((item) => item.position === 'threeCardFuture');

    if (!past || !present || !future) {
      throw new Error('Missing data');
    }

    const prompt = `
    Perform a tarot reading using a three-card spread: Past, Present, and Future.
    
    - Past: ${past.card.name} has meaning ${past.card.meaning_up}
    - Present: ${present.card.name} has meaning ${present.card.meaning_up}
    - Future: ${future.card.name} has meaning ${future.card.meaning_up}

    ${generalInstructions}
  `;

    const response = await openai.responses.create({
      model: 'gpt-4.1-nano',
      input: prompt,
    });

    res.json(response);
  } catch (e) {
    res.status(500).json({ error: `Could not read tarot cards: ${e}` });
  }
});

export { router as readingsRoutes };
