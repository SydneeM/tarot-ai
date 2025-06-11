import express from 'express';
import OpenAI from 'openai';
import 'dotenv/config';

const app = express();
const port = 3000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cards', async (req, res) => {
  try {
    const response = await fetch('https://tarotapi.dev/api/v1/cards');
    const data = await response.json();
    res.send(data);
  } catch {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/interpret', async (req, res) => {
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

    Interpret each card in the context of its position. 
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
