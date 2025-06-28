import type { Card } from '@shared/types';
import Draggable from './Draggable';
import Droppable from './Droppable';

interface SpreadProps {
  past: Card[];
  present: Card[];
  future: Card[];
}

function Spread({ past, present, future }: SpreadProps) {
  return (
    <div className="flex flex-row gap-x-4">
      <Droppable id="threeCardPast" className="flex flex-col w-60 border-1">
        {past.map((card) => (
          <Draggable key={card.name} id={card.name}>
            {card.name}
          </Draggable>
        ))}
      </Droppable>
      <Droppable id="threeCardPresent" className="flex flex-col w-60 border-1">
        {present.map((card) => (
          <Draggable key={card.name} id={card.name}>
            {card.name}
          </Draggable>
        ))}
      </Droppable>
      <Droppable id="threeCardFuture" className="flex flex-col w-60 border-1">
        {future.map((card) => (
          <Draggable key={card.name} id={card.name}>
            {card.name}
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
}

export default Spread;
