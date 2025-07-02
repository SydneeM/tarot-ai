import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  rectIntersection,
} from '@dnd-kit/core';
import type { Card, CardPosition } from '@shared/types';
import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import SpreadOptions from './components/SpreadOptions';
import Spread from './components/Spreads/Spread';

const NON_SPREAD_DROPZONES = 2;

const SpreadCardsMap = new Map<string, string[]>([
  ['oneCard', ['major', 'minor', 'oneCardChosen']],
  ['twoCardCross', ['major', 'minor', 'twoCardSituation', 'twoCardChallenge']],
  ['threeCard', ['major', 'minor', 'threeCardPast', 'threeCardPresent', 'threeCardFuture']],
  [
    'horseShoe',
    [
      'major',
      'minor',
      'horseShoePast',
      'horseShoePresent',
      'horseShoeInfluence',
      'horseShoeQuerent',
      'horseShoeOthers',
      'horseShoeAdvice',
      'horseShoeOutcome',
    ],
  ],
  [
    'celticCross',
    [
      'major',
      'minor',
      'celticCrossPresent',
      'celticCrossChallenge',
      'celticCrossPast',
      'celticCrossFuture',
      'celticCrossGoal',
      'celticCrossSubconscious',
      'celticCrossAdvice',
      'celticCrossInfluence',
      'celticCrossHopesAndFears',
      'celticCrossOutcome',
    ],
  ],
]);

const updateDropZones = (cards: Card[], zones: string[]) => {
  const result: Record<string, Card[]> = {};
  for (const zone of zones) {
    if (zone === 'major') {
      result[zone] = cards.filter((card) => card.type === 'major');
    } else if (zone === 'minor') {
      result[zone] = cards.filter((card) => card.type === 'minor');
    } else {
      result[zone] = [];
    }
  }
  return result;
};

const updateRestrictions = (myCards: Card[], zones: string[]) => {
  const result: Record<string, string[]> = {};
  for (const card of myCards) {
    result[card.name] = [card.type, ...zones];
  }
  return result;
};

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [spreadType, setSpreadType] = useState<string>('');
  const [dropZoneIds, setDropZoneIds] = useState<string[]>([]);
  const [dropZones, setDropZones] = useState<Record<string, Card[]>>({});
  const [restrictions, setRestrictions] = useState<Record<string, string[]>>({});
  const [cardChoices, setCardChoices] = useState<CardPosition[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const response = await fetch('/api/cards');
      const data: Card[] = await response.json();
      setCards(data);
      setDropZones(updateDropZones(data, ['major', 'minor']));
    };

    initialize();
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
    if (!allowedDrops) {
      return;
    }
    if (!allowedDrops.includes(overId)) {
      return;
    }
    if (overId !== 'major' && overId !== 'minor' && dropZones[overId].length > 0) {
      return;
    }

    setCardChoices((prev) => {
      let newCardPositions: CardPosition[] = [...prev];

      if (overId === 'major' || overId === 'minor') {
        const cardRemoved = newCardPositions.some((item) => item.card.name === activeId);
        if (cardRemoved && activeCard) {
          newCardPositions = newCardPositions.filter((item) => item.card.name !== activeId);
        }
      } else {
        const cardInSpread = newCardPositions.some((item) => item.position === overId);
        const curCardPosition = newCardPositions.find((item) => item.position === overId);
        if (cardInSpread && curCardPosition && activeCard) {
          curCardPosition.card = activeCard;
        } else if (!cardInSpread && activeCard) {
          newCardPositions.push({ position: overId, card: activeCard });
        }
      }

      return newCardPositions;
    });

    setDropZones((prev) => {
      const newDropZones: Record<string, Card[]> = { ...prev };

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

  const handleSpreadClick = (type: string) => {
    const zones = SpreadCardsMap.get(type);
    if (zones) {
      setSpreadType(type);
      setDropZoneIds(zones);
      setDropZones(updateDropZones(cards, zones));
      setRestrictions(
        updateRestrictions(
          cards,
          zones.filter((zone) => zone !== 'major' && zone !== 'minor')
        )
      );
      setCardChoices([]);
    } else {
      console.log('Invalid spread');
    }
  };

  const handleSubmit = async () => {
    console.log(cardChoices);
    const dropZoneOptions = SpreadCardsMap.get(spreadType);
    if (dropZoneOptions) {
      if (cardChoices.length === dropZoneOptions.length - NON_SPREAD_DROPZONES) {
        let url = '';
        let validType = false;

        switch (spreadType) {
          case 'oneCard':
            validType = true;
            url = '/api/readings/oneCard';
            break;
          case 'twoCardCross':
            validType = true;
            url = '/api/readings/twoCardCross';
            break;
          case 'threeCard':
            validType = true;
            url = '/api/readings/threeCard';
            break;
          case 'horseShoe':
            validType = true;
            url = '/api/readings/horseShoe';
            break;
          case 'celticCross':
            validType = true;
            url = '/api/readings/celticCross';
            break;
          default:
            validType = false;
            console.log('Invalid spread:', spreadType);
        }

        if (validType) {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardChoices),
          });

          const data = await response.json();
          console.log(data.output_text);
        }
      } else {
        console.log('Spread is incomplete');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-around">
      <h1>Tarot AI</h1>
      <button id="submit" type="button" className="rounded-md" onClick={handleSubmit}>
        Read the Cards
      </button>
      <div className="grid grid-cols-5 gap-4 h-[50%]">
        <DndContext
          collisionDetection={rectIntersection}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <CardContainer cards={dropZones.major} name="Major Arcana" dropZoneId="major" />
          <Spread type={spreadType} dropZones={dropZones} />
          <CardContainer cards={dropZones.minor} name="Minor Arcana" dropZoneId="minor" />
          <DragOverlay>
            {activeCard ? (
              <div className="flex flex-col justify-center items-center text-center text-black bg-white p-3 w-fit rounded-md">
                {activeCard.name}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
      <SpreadOptions name="Card Spreads" handleSpreadClick={handleSpreadClick} />
    </div>
  );
}

export default App;
