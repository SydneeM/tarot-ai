import express from 'express';
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
