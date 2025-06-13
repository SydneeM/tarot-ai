import type { Card } from '@shared/types';
import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Spread from './components/Spread';

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/api/cards');
      const data: Card[] = await response.json();
      setCards(data);
    };

    getData();
  }, []);

  return (
    <div className="h-screen flex flex-row justify-between items-center mx-20">
      <CardContainer cards={cards.filter((card) => card.type === 'major')} />
      <Spread />
      <CardContainer cards={cards.filter((card) => card.type === 'minor')} />
    </div>
  );
}

export default App;
