import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  closestCenter,
} from '@dnd-kit/core';
import type { Card } from '@shared/types';
import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Spread from './components/Spread';
import SpreadOptions from './components/SpreadOptions';

const dropZoneIds = ['major', 'minor', 'threeCardPast', 'threeCardPresent', 'threeCardFuture'];

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [dropZones, setDropZones] = useState<Record<string, Card[]>>({
    major: [],
    minor: [],
    threeCardPast: [],
    threeCardPresent: [],
    threeCardFuture: [],
  });

  const [restrictions, setRestrictions] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const initializeRestrictions = (myCards: Card[], zones: string[]) => {
      const result: Record<string, string[]> = {};
      for (const card of myCards) {
        result[card.name] = [card.type, ...zones];
      }
      return result;
    };

    const getData = async () => {
      const response = await fetch('/api/cards');
      const data: Card[] = await response.json();
      setCards(data);
      setDropZones({
        major: data.filter((card) => card.type === 'major'),
        minor: data.filter((card) => card.type === 'minor'),
        threeCardPast: [],
        threeCardPresent: [],
        threeCardFuture: [],
      });
      setRestrictions(
        initializeRestrictions(data, ['threeCardPast', 'threeCardPresent', 'threeCardFuture'])
      );
    };

    getData();
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const dragged = cards.find((card) => card.name === String(event.active.id));
    setActiveCard(dragged ?? null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);
    const allowedDrops = restrictions[activeId];
    
    if (!allowedDrops.includes(overId)) {
      return;
    }

    if (overId !== "major" && overId !== "minor" && dropZones[overId].length > 0){
      return;
    }

    setDropZones((prev) => {
      const newDropZones: Record<string, Card[]> = {
        ...prev,
      };

      for (const key of dropZoneIds) {
        newDropZones[key] = newDropZones[key].filter((card) => card.name !== activeId);
      }

      if (!activeCard) {
        newDropZones[overId] = [...newDropZones[overId]];
      } else {
        newDropZones[overId] = [...newDropZones[overId], activeCard];
      }

      return newDropZones;
    });
  };

  return (
    <div className="flex flex-col h-screen items-center justify-around">
      <span>Tarot AI</span>
      <div className="flex flex-row justify-around w-full h-[50%]">
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <CardContainer cards={dropZones.major} dropZoneId="major" />
          <Spread
            past={dropZones.threeCardPast}
            present={dropZones.threeCardPresent}
            future={dropZones.threeCardFuture}
          />
          <CardContainer cards={dropZones.minor} dropZoneId="minor" />
          <DragOverlay>
            {activeCard ? (
              <div className="flex flex-col justify-center items-center text-center text-white bg-[#1a1a1a] border border-gray-700 h-full">
                {activeCard.name}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
      <SpreadOptions />
    </div>
  );
}

export default App;
