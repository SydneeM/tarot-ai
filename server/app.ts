import express from 'express';
import 'dotenv/config';
import { cardsRoutes } from './routes/cards';
import { readingsRoutes } from './routes/readings';

const app = express();
const port = process.env.PORT || 3000;

app.use('/cards', cardsRoutes);
app.use('/readings', readingsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
