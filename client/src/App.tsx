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
    <div className="flex flex-col h-screen items-center justify-around">
      <span>Tarot AI</span>
      <div className="flex flex-row justify-around w-full h-[50%]">
        <CardContainer cards={cards.filter((card) => card.type === 'major')} />
        <Spread />
        <CardContainer cards={cards.filter((card) => card.type === 'minor')} />
      </div>
      <div className="">TBD Card Spreads</div>
    </div>
  );
}

export default App;
